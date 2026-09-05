"use client";

import { useEffect, useState } from "react";
export type MarketQuote = { price: number | null; currency: string; cap: number | null; m6: number | null; delay: string };
export function useMarketQuotes() {
  const [quotes, setQuotes] = useState<Record<string, MarketQuote>>({});
  const [status, setStatus] = useState("Loading market quotes…");
  useEffect(() => {
    const controller = new AbortController();
    let timer: ReturnType<typeof setTimeout>;
    async function refresh() {
      try {
        const response = await fetch("/api/market-quotes", { cache: "no-store", signal: controller.signal });
        if (!response.ok) throw new Error("Quotes unavailable");
        const data = await response.json();
        if (!controller.signal.aborted) {
          setQuotes(data.quotes);
          setStatus("Latest available quotes · Refreshes every minute · Exchange delays apply");
        }
      } catch {
        if (!controller.signal.aborted) {
          setQuotes({});
          setStatus("Quotes unavailable · Retrying automatically");
        }
      } finally {
        if (!controller.signal.aborted) timer = setTimeout(refresh, 60000);
      }
    }
    void refresh();
    return () => { controller.abort(); clearTimeout(timer); };
  }, []);
  return { quotes, status };
}
export function marketCap(value: number | null | undefined) {
  if (value == null) return "Market cap unavailable";
  return `${value >= 1e12 ? `$${(value / 1e12).toFixed(2)}T` : `$${(value / 1e9).toFixed(1)}B`} market cap`;
}
export function quoteDelay(mode: string | undefined) {
  const seconds = mode?.match(/delayed_streaming_(\d+)/)?.[1];
  return seconds ? `${Number(seconds) / 60} min delayed` : mode === "streaming" ? "Latest quote" : "Exchange data";
}
