"use client";

import { useState } from "react";
import universe from "./data/universe.json";
import { useMarketQuotes, marketCap, quoteDelay } from "./market-quotes";
import MarketSparkline from "./market-sparkline";
import MarketChart from "./market-chart";
import { tradingViewSymbol } from "./tradingview-symbol";

const floatTickers = ["2222.SR", "005930.KS", "0700.HK", "MC.PA", "300750.SZ", "600519.SS", "NESN.SW", "RMS.PA", "2454.TW", "9984.T", "7974.T"];
const bottomMarketTickers = ["2222.SR", "005930.KS"];
export default function MarketBoard({ view = "markets" }: { view?: "markets" | "top200" }) {
  const { quotes, status } = useMarketQuotes();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [limit, setLimit] = useState(20);
  const [open, setOpen] = useState<string | null>(null);
  const top = view === "top200";
  const source = top ? universe : universe.filter(c => floatTickers.includes(c.ticker))
    .sort((a, b) => bottomMarketTickers.indexOf(a.ticker) - bottomMarketTickers.indexOf(b.ticker));
  const rows = source.filter(c => (!top || filter === "all" || (filter === "on" ? c.on : !c.on)) && `${c.name} ${c.ticker}`.toLowerCase().includes(query.toLowerCase()));
  return <div className="float-content">
    <div className="float-intro h3 h3--small">{top ? "Explore the Top 200 company universe." : "Explore Float’s global market universe."}<p className="float-muted">{status}</p></div>
    <div className="float-toolbar">
      <div className="float-filters" aria-label="Coverage filters">{(top ? [["all", "All companies"], ["on", "On Robinhood"], ["off", "Not on Robinhood"]] : [["all", "Float universe"]]).map(([id, label]) => <button key={id} aria-pressed={filter === id} onClick={() => { setFilter(id); setLimit(20); }}>{label} <sup>{id === "all" ? source.length : source.filter(c => id === "on" ? c.on : !c.on).length}</sup></button>)}</div>
      <label className="float-search"><input value={query} onChange={e => { setQuery(e.target.value); setLimit(20); }} placeholder="Search companies" aria-label="Search companies" />{query && <button aria-label="Clear search" onClick={() => setQuery("")}>×</button>}</label>
    </div>
    <div className="AnnouncementsList_announcementsList__list__y5pZs">{rows.slice(0, limit).map(c => {
      const quote = quotes[tradingViewSymbol(c.ticker) ?? ""];
      return <article className="PostPreview_postPreview__4Cl8Z" key={c.ticker}>
      <button className="float-article" aria-expanded={open === c.ticker} aria-controls={`detail-${c.ticker}`} onClick={() => setOpen(open === c.ticker ? null : c.ticker)}>
        <span className="PostPreview_postPreview__header__Vumpb"><span className="h3 h3--small">{c.ticker}</span><span className="float-muted">{top ? (c.on ? "On Robinhood" : "Not on Robinhood") : quoteDelay(quote?.delay)}</span></span>
        <span className="PostPreview_postPreview__content__qwniW float-company-summary"><span className="PostPreview_postPreview__title__c1oda"><span className="h3 h3--medium float-company-title">{c.name}</span></span><span className="PostPreview_postPreview__excerpt__pDb2h"><span className="h3 h3--small">{c.ticker} · {marketCap(quote?.cap)}</span></span><span className="float-quote"><span>{quote?.price == null ? "Price unavailable" : `${quote.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${quote.currency}`}</span><span className={quote?.m6 != null && quote.m6 < 0 ? "float-negative" : "float-positive"}>{quote?.m6 == null ? "—" : `${quote.m6 >= 0 ? "+" : ""}${quote.m6.toFixed(2)}%`} <small>6M</small></span></span><span className="float-mini-chart"><MarketSparkline ticker={c.ticker} name={c.name} /><span className="float-expand" aria-label={open === c.ticker ? "Collapse chart" : "Enlarge chart"}>{open === c.ticker ? "−" : "+"}</span></span></span>
      </button>
      {open === c.ticker && <div className="float-detail float-detail-tradingview" id={`detail-${c.ticker}`}>
        <MarketChart key={c.ticker} ticker={c.ticker} name={c.name} />
      </div>}
    </article>; })}</div>
    {!rows.length && <p className="h3 h3--small">No companies match “{query}”. <button onClick={() => { setQuery(""); setFilter("all"); }}>Reset filters</button></p>}
    <div className="float-list-footer"><span aria-live="polite">Showing {Math.min(limit, rows.length)} of {rows.length} companies</span>{limit < rows.length && <button onClick={() => setLimit(limit + 40)}>Show more ↓</button>}</div>
    {!top && <div className="float-notes AnnouncementsList_announcementsList__list__y5pZs"><article className="float-article"><header className="PostPreview_postPreview__header__Vumpb"><span className="h3 h3--small">Transparency</span></header><div className="PostPreview_postPreview__content__qwniW"><h2 className="h3 h3--medium">Proof of reserve</h2><p className="h3 h3--small">Shares held in custody against fSHARES outstanding, per market.</p><p className="float-muted">Reserve balances are unavailable while the Float market service is disconnected.</p></div></article><article className="float-article"><header className="PostPreview_postPreview__header__Vumpb"><span className="h3 h3--small">Infrastructure</span></header><div className="PostPreview_postPreview__content__qwniW"><h2 className="h3 h3--medium">Oracles</h2><p className="h3 h3--small">Reference prices with per-market staleness limits.</p>{[["Float updater", "Primary poster"], ["Chainlink", "Adapter"], ["RedStone", "Planned"], ["DIA", "Planned"], ["Pyth", "Awaiting deployment"]].map(([name, status]) => <div className="float-oracle" key={name}><span>{name}</span><span className="float-muted">{status}</span></div>)}<p className="float-muted">Source configuration; live feed health is unavailable.</p></div></article></div>}
    <p className="float-disclaimer">Quotes and optional advanced charts by TradingView. Line charts show six months of daily closing prices from Yahoo Finance and refresh every minute. Prices use the listing’s currency; market caps are in USD. Six-month returns come from the latest provider data. Updates follow exchange trading hours and may be delayed. Company membership, ordering and Robinhood coverage come from the September 1, 2026 reference list; they are not live market-cap rankings.</p>
  </div>;
}
