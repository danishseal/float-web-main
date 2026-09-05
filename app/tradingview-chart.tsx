"use client";

import { useEffect, useRef, useState } from 'react';

export default function TradingViewChart({ symbol, name }: { symbol: string; name: string }) {
  const container = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'slow' | 'error'>('loading');
  useEffect(() => {
    const root = container.current;
    if (!root) return;
    const doc = root.ownerDocument;
    let disposed = false;
    const widget = doc.createElement('div');
    widget.className = 'tradingview-widget-container__widget';
    root.append(widget);
    const script = doc.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;
    script.type = 'text/javascript';
    script.textContent = JSON.stringify({
      autosize: true, symbol, interval: 'D', timezone: 'Etc/UTC',
      theme: 'light', style: '1', locale: 'en', allow_symbol_change: false,
      hide_side_toolbar: true, hide_top_toolbar: false, hide_legend: false,
      hide_volume: false, calendar: false, details: false, hotlist: false,
      save_image: true, backgroundColor: '#ffffff',
      gridColor: 'rgba(46, 46, 46, 0.06)', withdateranges: true,
      support_host: 'https://www.tradingview.com',
    });
    const timer = window.setTimeout(() => { if (!disposed) setStatus('slow'); }, 15000);
    const loaded = () => {
      if (disposed) return;
      window.clearTimeout(timer);
      setStatus('ready');
    };
    const observer = new MutationObserver(() => {
      const frame = root.querySelector('iframe');
      if (frame && frame.dataset.floatObserved !== 'true') {
        frame.dataset.floatObserved = 'true';
        frame.title = `${name} chart by TradingView`;
        frame.addEventListener('load', loaded, { once: true });
      }
    });
    observer.observe(root, { childList: true, subtree: true });
    script.onerror = () => {
      window.clearTimeout(timer);
      if (!disposed) setStatus('error');
    };
    root.append(script);
    return () => {
      disposed = true;
      window.clearTimeout(timer);
      observer.disconnect();
      root.querySelector('iframe')?.removeEventListener('load', loaded);
      root.replaceChildren();
    };
  }, [symbol, name]);
  const url = `https://www.tradingview.com/chart/?symbol=${encodeURIComponent(symbol)}`;
  return <div className="float-tv-chart">
    {status !== 'ready' && <p className="float-muted" role="status">{status === 'error' ? 'TradingView could not load. Open TradingView below to view this market.' : status === 'slow' ? 'TradingView is taking longer to load. You can open TradingView below.' : 'Loading TradingView chart…'}</p>}
    <div ref={container} className="tradingview-widget-container float-tv-container" />
    <div className="tradingview-widget-copyright"><a href={url} target="_blank" rel="noopener noreferrer nofollow">{name} chart</a><span> by TradingView</span></div>
    <p className="float-muted float-tv-note">{symbol} · Updates follow the exchange’s trading hours. Data may be delayed or unavailable for some markets.</p>
  </div>;
}
