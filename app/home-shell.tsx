"use client";

import { useEffect, useRef, useState } from "react";

import { createPortal } from "react-dom";
import MarketBoard from "./market-board";

export default function HomeShell({ view }: { view?: "markets" | "top200" | "announcements" }) {
  const frame = useRef<HTMLIFrameElement>(null);

  const [host, setHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const iframe = frame.current;
    if (!iframe) return;
    let observer: MutationObserver | undefined;
    let cleanupNavigation: (() => void) | undefined;
    const attach = () => {
      const doc = iframe.contentDocument;
      if (!doc?.body) return;
      observer?.disconnect();
      cleanupNavigation?.();
      const navigate = (event: MouseEvent) => {
        const link = (event.target as Element | null)?.closest<HTMLAnchorElement>("a");
        if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        const url = new URL(link.href, doc.baseURI);
        if (url.origin !== window.location.origin) return;
        if (["/", "/market", "/top200", "/Market", "/announcements"].includes(url.pathname) || (view && url.hash)) {
          event.preventDefault();
          event.stopPropagation();
          window.location.assign(view && url.hash ? `/${url.hash}` : url.pathname + url.search + url.hash);
        }
      };
      doc.addEventListener("click", navigate, true);
      cleanupNavigation = () => doc.removeEventListener("click", navigate, true);
      const sync = () => {
        const aboutNumber = doc.querySelector(".section--about .SectionLabel_sectionLabel__index__lvtR0");
        if (aboutNumber && aboutNumber.textContent !== "04") aboutNumber.textContent = "04";
        const marketSectionNumber = doc.querySelector(".section--usability .SectionLabel_sectionLabel__index__lvtR0");
        if (marketSectionNumber && marketSectionNumber.textContent !== "02") {
          marketSectionNumber.textContent = "02";
        }
        const marketsLabel = doc.querySelector(".section--use-cases .SectionLabel_sectionLabel__p19ZQ");
        const marketsNumber = marketsLabel?.querySelector(".SectionLabel_sectionLabel__index__lvtR0");
        const marketsText = marketsLabel?.querySelector(".SectionLabel_sectionLabel__text__ZdXcY");
        if (marketsNumber && marketsNumber.textContent !== "03") marketsNumber.textContent = "03";
        if (marketsText && marketsText.textContent !== "Market") marketsText.textContent = "Market";
        // The nav label is baked into the mirrored site's CMS payload, while
        // the page it opens has always been the top 200 board. The payload
        // itself is patched, so this is the belt for a re-export that brings
        // the old label back.
        //
        // It walks TEXT NODES, not elements. The first version of this asked
        // for a childless element whose whole text was "Top 100" and matched
        // nothing ever: the anchor reads "1 Top 100" because the key badge is
        // a child of the same link, so it failed both the exact-text test and
        // the childless test. Replacing the substring where it actually lives
        // does not care how the label is wrapped. The slug stays Top-100, so
        // the route is unchanged; only the space form is touched.
        const labels = doc.createTreeWalker(doc.body, NodeFilter.SHOW_TEXT);
        const stale: Text[] = [];
        for (let node = labels.nextNode(); node; node = labels.nextNode()) {
          if (node.textContent?.includes("Top 100")) stale.push(node as Text);
        }
        // Collected first, then written. Mutating during the walk feeds the
        // MutationObserver that called this, and the observer calls sync again.
        // It terminates either way, since nothing contains "Top 100" after the
        // first pass, but a pass that writes nothing is the cheaper steady state.
        stale.forEach(node => {
          node.textContent = node.textContent!.replaceAll("Top 100", "Top 200");
        });
        doc.querySelectorAll(".section--use-cases .UseCasesSection_useCases__indexPrimary__SsC8P").forEach(index => {
          if (index.textContent !== "03.") index.textContent = "03.";
        });
        const dropdownButton = doc.querySelector<HTMLButtonElement>('button[aria-haspopup="true"]');
        const dropdownLabelCharacters = dropdownButton?.querySelectorAll<HTMLElement>(".scramble-label > span");
        Array.from("Explore").forEach((character, index) => {
          const span = dropdownLabelCharacters?.[index];
          if (span && span.textContent !== character) span.textContent = character;
        });
        const dropdownMenuId = dropdownButton?.getAttribute("aria-controls");
        if (dropdownMenuId) doc.getElementById(dropdownMenuId)?.setAttribute("aria-label", "Explore");
        const marketShortcut = doc.querySelector<HTMLElement>('a[href="/market"] .key');
        if (marketShortcut && marketShortcut.textContent !== "M") marketShortcut.textContent = "M";
        const top200Link = doc.querySelector<HTMLAnchorElement>('a[href="/Top-100"], a[href="/top100"]');
        if (top200Link) {
          top200Link.href = "/top200";
          const key = top200Link.querySelector<HTMLElement>(".key");
          if (key && key.textContent !== "2") key.textContent = "2";
          const labelCharacters = top200Link.querySelectorAll<HTMLElement>(".label > span");
          Array.from("Top 200").forEach((character, index) => {
            const span = labelCharacters[index];
            if (span && span.textContent !== character) span.textContent = character;
          });
        }
        if (view) {
          if (!doc.getElementById("float-page-styles")) {
            const css = doc.createElement("link");
            css.id = "float-page-styles";
            css.rel = "stylesheet";
            css.href = "/announcements-markets.css";
            doc.head.append(css);
          }
          const content = doc.getElementById("main-content-inner");
          if (content && !doc.getElementById("float-market-page-root")) {
            const mount = doc.createElement("div");
            mount.id = "float-market-page-root";
            const footerWrapper = Array.from(content.children).find(child => child.matches("footer") || child.querySelector("footer"));
            content.insertBefore(mount, footerWrapper ?? null);
            doc.documentElement.classList.add("float-market-view");
            setHost(mount);
          }
          const title = `${view === "announcements" ? "Announcements" : view === "top200" ? "Top 200" : "Market"} | Float`;
          if (doc.title !== title) doc.title = title;
        }
        if (!doc.getElementById("float-route-nav-style")) {
          const style = doc.createElement("style");
          style.id = "float-route-nav-style";
          style.textContent = `.Header_header__pLWYI a[href$="#products"],.Header_header__button__0V17s:has(>a[href$="#products"]){display:none!important}`;
          doc.head.append(style);
        }

      };
      sync();
      observer = new MutationObserver(sync);
      observer.observe(doc.body, { childList: true, subtree: true });
    };
    const ready = view ? window.setInterval(() => {
      const doc = iframe.contentDocument;
      if (doc?.querySelector<HTMLLinkElement>("#float-page-styles")?.sheet && doc.querySelector("#float-market-content .float-content")) {
        iframe.dataset.ready = "true";
      }
    }, 100) : undefined;
    iframe.addEventListener("load", attach);
    attach();
    return () => { window.clearInterval(ready); cleanupNavigation?.(); observer?.disconnect(); iframe.removeEventListener("load", attach); };
  }, [view]);

  return <main className={view ? "mirror-shell market-shell" : "mirror-shell"}><iframe ref={frame} className="mirror-frame" src="/dottxt-site/index.html" title="Float website" />{view && host && createPortal(
    <section className="section section--announcements AnnouncementsList_announcementsList__ZpXcc float-market-page">
      <div className="AnnouncementsList_announcementsList__title__sfM1T AnnouncementsList_announcementsList__title--border__hbmBM">
        <div className="AnnouncementsList_announcementsList__titleWrapper__aj4mJ"><h1 className="h2 h2--medium">{view === "announcements" ? "Announcements" : view === "top200" ? "Top 200" : "Markets"}</h1></div>
      </div>
      <div className="AnnouncementsList_announcementsList__container__V7Z59">
        <div id="float-market-content" className="AnnouncementsList_announcementsList__listWrapper__aigtX">{view === "announcements" ? <div className="float-content"><p className="h3 h3--small">No announcements yet.</p></div> : <MarketBoard key={view} view={view} />}</div>
      </div>
    </section>, host
  )}</main>;
}
