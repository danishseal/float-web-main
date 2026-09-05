"use client";

import { useEffect, useRef, useState } from "react";

export default function TradingViewQuote({ symbol, name }: { symbol: string; name: string }) {
  const container = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState("Loading latest market quote…");
  useEffect(() => {
    const root = container.current;
    if (!root) return;
    let timer: ReturnType<typeof setTimeout>;
    let frame: HTMLIFrameElement | null = null;
    const loaded = () => { clearTimeout(timer); setStatus(""); };
    const observer = new MutationObserver(() => {
      const next = root.querySelector("iframe");
      if (next && next !== frame) {
        frame = next;
        frame.title = `${name} latest quote and company financials`;
        frame.addEventListener("load", loaded);
      }
    });
    const visible = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      visible.disconnect();
      observer.observe(root, { childList: true, subtree: true });
      const widget = root.ownerDocument.createElement("div");
      widget.className = "tradingview-widget-container__widget";
      const script = root.ownerDocument.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js";
      script.async = true;
      script.textContent = JSON.stringify({ symbol, width: "100%", locale: "en", colorTheme: "light", isTransparent: true });
      script.onerror = () => { clearTimeout(timer); setStatus("Quote unavailable. Open TradingView below to check this market."); };
      timer = setTimeout(() => setStatus("Quote is taking longer to load. Open TradingView below to check this market."), 20000);
      root.append(widget, script);
    }, { rootMargin: "300px" });
    visible.observe(root);
    return () => {
      visible.disconnect();
      observer.disconnect();
      clearTimeout(timer);
      frame?.removeEventListener("load", loaded);
      root.replaceChildren();
    };
  }, [symbol, name]);
  return <div className="float-live-quote">
    {status && <p className="float-muted" role="status">{status}</p>}
    <div ref={container} className="tradingview-widget-container" />
    <div className="tradingview-widget-copyright"><a href={`https://www.tradingview.com/chart/?symbol=${encodeURIComponent(symbol)}`} target="_blank" rel="noopener noreferrer nofollow">{name} market data</a> by TradingView</div>
  </div>;
}
