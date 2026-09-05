import universe from "../../data/universe.json";

export const dynamic = "force-dynamic";
const allowed = new Set(universe.map(company => company.ticker));

export async function GET(request: Request) {
  const ticker = new URL(request.url).searchParams.get("ticker") ?? "";
  if (!allowed.has(ticker)) return Response.json({ error: "Unknown company" }, { status: 400 });
  try {
    const response = await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(ticker)}?range=6mo&interval=1d`, {
      headers: { "User-Agent": "Mozilla/5.0", Accept: "application/json" },
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(12000),
    });
    if (!response.ok) throw new Error("History unavailable");
    const payload = await response.json();
    const result = payload.chart?.result?.[0];
    const timestamps = result?.timestamp;
    const closes = result?.indicators?.quote?.[0]?.close;
    if (!Array.isArray(timestamps) || !Array.isArray(closes)) throw new Error("Invalid history");
    const points: [number, number][] = [];
    timestamps.forEach((timestamp: unknown, index: number) => {
      const price = closes[index];
      if (typeof timestamp === "number" && Number.isFinite(timestamp) && typeof price === "number" && Number.isFinite(price)) points.push([timestamp, price]);
    });
    if (points.length < 2) throw new Error("Insufficient history");
    return Response.json({ points, asOf: points[points.length - 1][0] }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return Response.json({ error: "Price history temporarily unavailable" }, { status: 502 });
  }
}
