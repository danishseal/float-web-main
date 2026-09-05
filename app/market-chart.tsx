"use client";

import { useState } from "react";
import MarketSparkline from "./market-sparkline";
import TradingViewChart from "./tradingview-chart";
import { tradingViewSymbol } from "./tradingview-symbol";

export default function MarketChart({ ticker, name }: { ticker: string; name: string }) {
  const [mode, setMode] = useState<"line" | "tradingview">("line");
  const symbol = tradingViewSymbol(ticker);

  return <>
    <div className="float-chart-source" role="group" aria-label={`${name} chart type`}>
      <button type="button" aria-pressed={mode === "line"} onClick={() => setMode("line")}>Line chart</button>
      <button type="button" aria-pressed={mode === "tradingview"} onClick={() => setMode("tradingview")}>TradingView</button>
    </div>
    {mode === "line" ? <div className="float-line-chart">
      <MarketSparkline ticker={ticker} name={name} expanded />
      <p className="float-muted">Six months of daily closing prices · Yahoo Finance</p>
    </div> : symbol ? <TradingViewChart symbol={symbol} name={name} /> : <p className="float-muted">A matching TradingView listing is unavailable for {name}.</p>}
  </>;
}
