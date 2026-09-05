type Scramble = (ref: { current: HTMLElement }, characters: string[]) => void;
type MirrorRequire = {
  (id: 96028): { A: Scramble };
  (id: 45911): { Ay: { killTweensOf: (targets: HTMLElement[]) => void } };
};
type MirrorWindow = Window & {
  floatNavigationBridgeId?: number;
  webpackChunk_N_E?: Array<[string[], Record<string, never>, (require: MirrorRequire) => void]>;
};

// Use the mirror's existing module, also called by Products, Documentation,
// and Blog. This bridge adds event bindings only; no animation is reimplemented.
export function bindNavigationHover(doc: Document) {
  let scramble: Scramble | undefined;
  let killTweens: ((targets: HTMLElement[]) => void) | undefined;
  const mirror = doc.defaultView as MirrorWindow | null;
  const resolveAnimation = () => {
    if (scramble || !mirror?.webpackChunk_N_E) return;
    // Webpack skips runtime callbacks for chunk IDs it has already loaded.
    // Each binding needs a fresh ID after iframe loads or React effect reruns.
    const id = (mirror.floatNavigationBridgeId ?? 0) + 1;
    mirror.floatNavigationBridgeId = id;
    mirror.webpackChunk_N_E.push([
      [`float-navigation-bridge-${id}`],
      {},
      require => {
        scramble = require(96028).A;
        killTweens = require(45911).Ay.killTweensOf;
      },
    ]);
  };

  const enter = (event: Event) => {
    const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('[data-float-navigation] a');
    if (!link) return;
    const related = (event as MouseEvent).relatedTarget as Node | null;
    if (related && link.contains(related)) return;
    const label = link.querySelector<HTMLElement>('.label');
    if (!label) return;
    const characters = Array.from(label.children, glyph => (glyph as HTMLElement).dataset.character ?? '');
    resolveAnimation();
    scramble?.({ current: label }, characters);
  };

  doc.addEventListener('mouseover', enter);
  doc.addEventListener('focusin', enter);
  return () => {
    doc.removeEventListener('mouseover', enter);
    doc.removeEventListener('focusin', enter);
    killTweens?.(Array.from(doc.querySelectorAll<HTMLElement>('[data-float-navigation] .label > span')));
  };
}
