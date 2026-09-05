// Yahoo-style tickers in the imported snapshot -> TradingView exchange symbols.
const exchanges: Record<string, string> = {
  SR: 'TADAWUL', KS: 'KRX', SS: 'SSE', SZ: 'SZSE', SW: 'SIX',
  HK: 'HKEX', PA: 'EURONEXT', DE: 'XETR', AE: 'ADX', TW: 'TWSE',
  MC: 'BME', AX: 'ASX', AS: 'EURONEXT', T: 'TSE', NS: 'NSE',
  SI: 'SGX', L: 'LSE', MI: 'MIL', F: 'FWB', ST: 'OMXSTO',
};
const nasdaq = new Set('NVDA AAPL GOOG MSFT AMZN AVGO META TSLA MU AMD ASML INTC PLTR CSCO COST LRCX AMAT NFLX PANW ARM AMGN TXN SNDK CRWD LIN KLAC TMUS PEP GILD STX MRVL QCOM ADI IBKR WMT SHOP WDC BKNG VRTX ISRG SBUX FTNT PDD ADBE'.split(' '));
export function tradingViewSymbol(ticker: string): string | null {
  // The snapshot's SPCX entry cannot safely be matched to a listed company.
  if (ticker === 'SPCX') return null;
  if (ticker === 'TCEHY') return 'OTC:TCEHY';
  if (ticker === 'BRK-B') return 'NYSE:BRK.B';
  const dot = ticker.lastIndexOf('.');
  if (dot === -1) return `${nasdaq.has(ticker) ? 'NASDAQ' : 'NYSE'}:${ticker}`;
  let name = ticker.slice(0, dot);
  const suffix = ticker.slice(dot + 1);
  const exchange = exchanges[suffix];
  if (!exchange) return null;
  if (suffix === 'HK') name = String(Number(name));
  if (suffix === 'ST') name = name.replaceAll('-', '_');
  if (ticker === 'RR.L') name = 'RR.';
  return `${exchange}:${name}`;
}
