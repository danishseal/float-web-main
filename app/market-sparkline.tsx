"use client";

import { useEffect, useRef, useState } from "react";

type History = { points: [number, number][]; asOf: number };
export default function MarketSparkline({ ticker, name, expanded = false }: { ticker: string; name: string; expanded?: boolean }) {
  const container = useRef<HTMLSpanElement>(null);
  const [history, setHistory] = useState<History | null>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const root = container.current;
    if (!root) return;
    const controller = new AbortController();
    let visible = false;
    let busy = false;
    let timer: ReturnType<typeof setTimeout>;
    async function refresh() {
      if (!visible || busy || controller.signal.aborted) return;
      busy = true;
      clearTimeout(timer);
      try {
        const response = await fetch(`/api/market-history?ticker=${encodeURIComponent(ticker)}`, { cache: "no-store", signal: controller.signal });
        if (!response.ok) throw new Error("History unavailable");
        const data: History = await response.json();
        if (!controller.signal.aborted) { setHistory(data); setFailed(false); }
      } catch {
        if (!controller.signal.aborted) { setHistory(null); setFailed(true); }
      } finally {
        busy = false;
        if (!controller.signal.aborted && visible) timer = setTimeout(refresh, 60000);
      }
    }
    const observer = new IntersectionObserver(entries => {
      visible = entries.some(entry => entry.isIntersecting);
      if (visible) void refresh();
      else clearTimeout(timer);
    }, { rootMargin: "150px" });
    observer.observe(root);
    return () => { controller.abort(); observer.disconnect(); clearTimeout(timer); };
  }, [ticker]);

  const points = history?.points ?? [];
  const low = Math.min(...points.map(point => point[1]));
  const high = Math.max(...points.map(point => point[1]));
  const first = points[0]?.[0] ?? 0;
  const duration = (points[points.length - 1]?.[0] ?? 0) - first || 1;
  const width = expanded ? 900 : 90;
  const height = expanded ? 260 : 38;
  return <span ref={container} className="float-sparkline">
    {history ? <svg className="chart" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" role="img" aria-label={`${name} six-month price history`}>
      <title>{name} · Six-month daily closes · Through {new Date(history.asOf * 1000).toISOString().slice(0, 10)} · Yahoo Finance</title>
      <polyline points={points.map(([time, value]) => `${2 + (time - first) / duration * (width - 4)},${high === low ? height / 2 : height - 3 - (value - low) / (high - low) * (height - 6)}`).join(" ")} fill="none" stroke="currentColor" strokeWidth="1.25" vectorEffect="non-scaling-stroke" />
    </svg> : <span className="float-sparkline-status" role="status" title={failed ? "Price history unavailable; retrying automatically" : "Loading six-month price history"}>{failed ? "Unavailable" : "Loading…"}</span>}
  </span>;
}
