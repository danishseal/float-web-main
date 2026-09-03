import { createHash } from "node:crypto";
import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { extname, join, relative } from "node:path";

const mirrorRoot = join(process.cwd(), "public", "dottxt-site");
const imageRoot = join(mirrorRoot, "images");
const outputRoot = join(mirrorRoot, "assets", "images");
const textFiles = [];

function walk(directory) {
  for (const name of readdirSync(directory)) {
    const file = join(directory, name);
    const stats = statSync(file);

    if (stats.isDirectory()) {
      if (file !== imageRoot && file !== outputRoot) walk(file);
    } else if (/\.(?:css|html|js)$/.test(name)) {
      textFiles.push(file);
    }
  }
}

function findDownloadedImage(url) {
  const parsed = new URL(url);
  const relativePath = parsed.pathname.replace(/^\/images\//, "");
  const exactPath = join(imageRoot, `${relativePath}${parsed.search}`);

  if (existsSync(exactPath)) return exactPath;

  const directory = join(imageRoot, relativePath, "..");
  const basename = relativePath.split("/").at(-1);
  const variant = readdirSync(directory)
    .filter((name) => name.startsWith(`${basename}?`))
    .sort((left, right) => {
      const leftSize = statSync(join(directory, left)).size;
      const rightSize = statSync(join(directory, right)).size;
      return rightSize - leftSize;
    })[0];

  if (!variant) throw new Error(`Missing downloaded image for ${url}`);
  return join(directory, variant);
}

mkdirSync(outputRoot, { recursive: true });
walk(mirrorRoot);

const replacements = new Map();
const sanityPattern = /https:\/\/cdn\.sanity\.io\/images\/[A-Za-z0-9_./-]+(?:\?[^"'\\\s<>)}]+)?/g;

for (const file of textFiles) {
  const source = readFileSync(file, "utf8");
  for (const match of source.matchAll(sanityPattern)) {
    const encodedUrl = match[0];
    const url = encodedUrl.replaceAll("&amp;", "&");
    if (replacements.has(encodedUrl)) continue;

    const sourceImage = findDownloadedImage(url);
    const parsed = new URL(url);
    const extension = extname(parsed.pathname);
    const stem = parsed.pathname.split("/").at(-1).slice(0, -extension.length);
    const digest = createHash("sha256").update(url).digest("hex").slice(0, 10);
    const outputName = `${stem}-${digest}${extension}`;
    const outputFile = join(outputRoot, outputName);

    if (!existsSync(outputFile)) copyFileSync(sourceImage, outputFile);
    replacements.set(encodedUrl, `/dottxt-site/assets/images/${outputName}`);
  }
}

for (const file of textFiles) {
  let source = readFileSync(file, "utf8");
  const original = source;

  for (const [remoteUrl, localUrl] of replacements) {
    source = source.replaceAll(remoteUrl, localUrl);
  }

  if (source !== original) writeFileSync(file, source);
}

console.log(`Localized ${replacements.size} Sanity image URLs across ${textFiles.length} files.`);
console.log(`Images written to ${relative(process.cwd(), outputRoot)}.`);
