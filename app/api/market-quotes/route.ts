import universe from "../../data/universe.json";
import { tradingViewSymbol } from "../../tradingview-symbol";

export const dynamic = "force-dynamic";
const numeric = (value: unknown): number | null => typeof value === "number" && Number.isFinite(value) ? value : null;

export async function GET() {
  try {
    const response = await fetch("https://scanner.tradingview.com/global/scan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        symbols: { tickers: universe.map(c => tradingViewSymbol(c.ticker)).filter(Boolean) },
        columns: ["close", "currency", "market_cap_basic", "Perf.6M", "update_mode"],
        currency: "USD",
      }),
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(12000),
    });
    if (!response.ok) throw new Error("Quote provider unavailable");
    const payload = await response.json();
    if (!Array.isArray(payload.data)) throw new Error("Invalid quote response");
    const quotes: Record<string, { price: number | null; currency: string; cap: number | null; m6: number | null; delay: string }> = {};
    for (const row of payload.data) {
      if (typeof row.s !== "string" || !Array.isArray(row.d)) continue;
      quotes[row.s] = {
        price: numeric(row.d[0]), currency: typeof row.d[1] === "string" ? row.d[1] : "",
        cap: numeric(row.d[2]), m6: numeric(row.d[3]),
        delay: typeof row.d[4] === "string" ? row.d[4] : "unknown",
      };
    }
    return Response.json({ quotes }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return Response.json({ error: "Market quotes are temporarily unavailable." }, { status: 502 });
  }
}
