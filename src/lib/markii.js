var p = Object.defineProperty;
var c = (i, t, e) => t in i ? p(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var r = (i, t, e) => c(i, typeof t != "symbol" ? t + "" : t, e);
let l = 0;
const d = () => ++l;
class u {
  constructor(t) {
    // the internal id of the renderer. used to create unique anchor names.
    r(this, "id", d());
    // desired speed of the marquee animation, from -1.0 to 1.0.
    r(this, "speedX", 0.01);
    r(this, "speedY", 0);
    // whether or not the marquee should "tile"
    //  (this fucks shit up)
    r(this, "tiled", !1);
    // the progress of animation in both x and y
    r(this, "progressY", 0);
    r(this, "progressX", 0);
    // the original target element we want to marquee.
    // if it is an element -without- children, :
    // if it is an element -with- children, :
    r(this, "target");
    // the original target dimensions. treat this as the 'canvas size'
    r(this, "targetDimensions", { x: 0, y: 0 });
    // a constructed element that will contain our marquee content.
    // the goal is to position the wrapper directly on top of the target element, with the same dimensions
    r(this, "targetWrapper");
    r(this, "contentDimensions", { x: 0, y: 0 });
    r(this, "children", []);
    console.log("Constructing anchor renderer", t), this.target = t;
    const e = t.getBoundingClientRect();
    this.targetDimensions = { x: e.width, y: e.height };
  }
  setup() {
    this.wrapTarget(), this.initChildren(), this.speedX != 0 && (this.progressX = -1);
  }
  remove() {
  }
  render() {
    this.tickProgress();
    for (const t of this.children)
      t.position.x = t.position.x + this.speedX, t.position.y = t.position.y + this.speedY, t.position.x >= this.targetDimensions.x && (t.position.x = -this.contentDimensions.x), t.position.y >= this.targetDimensions.y && (t.position.y = -this.contentDimensions.y), t.element.style.transform = `translate(${Math.round(t.position.x)}px, ${Math.round(t.position.y)}px)`;
  }
  tickProgress() {
    this.progressX > 1 && (this.progressX = -1), this.progressX < -1 && (this.progressX = 1), this.progressY > 1 && (this.progressY = -1), this.progressY < -1 && (this.progressY = 1), this.progressX = this.progressX + this.speedX, this.progressY = this.progressY + this.speedY;
  }
  wrapTarget() {
    var t;
    this.targetWrapper = document.createElement("div"), this.targetWrapper.style.position = "absolute", this.targetWrapper.style.top = "anchor(--mq-render-" + this.id + " start)", this.targetWrapper.style.height = this.targetDimensions.y + "px", this.targetWrapper.style.width = this.targetDimensions.x + "px", this.targetWrapper.style.overflow = "hidden", (t = this.target.parentElement) == null || t.appendChild(this.targetWrapper), this.target.style.anchorName = "--mq-render-" + this.id, this.target.style.visibility = "hidden";
  }
  initChildren() {
    const t = () => {
      const s = {
        element: this.target.cloneNode(!0),
        position: {
          x: this.children.length * this.contentDimensions.x,
          y: 0
        }
      };
      return s.element.style.position = "absolute", s.element.style.visibility = "visible", s.element.style.anchorName = "", s.element.style.display = "inline-block", this.targetWrapper.appendChild(s.element), this.children.push(s), s;
    }, o = t().element.getBoundingClientRect();
    if (this.contentDimensions = { x: o.width, y: o.height }, this.tiled) {
      const s = Math.round(this.targetDimensions.x / this.contentDimensions.x);
      console.log({ xtimes: s });
      for (let a = 0; a < s; a++)
        t();
    }
  }
}
const g = (i) => {
  let t = 0, e;
  e = new u(i), e.speedY = parseFloat(i.getAttribute(h) ?? "0.0"), e.speedX = parseFloat(i.getAttribute(n) ?? "0.0"), e.tiled = i.hasAttribute(m), e.setup();
  const o = new MutationObserver((y) => {
  });
  o.observe(i, { attributes: !0 });
  const s = () => {
    t = requestAnimationFrame(() => {
      e.render(), s();
    });
  };
  return {
    element: i,
    renderer: e,
    start: () => s(),
    stop: () => {
      cancelAnimationFrame(t), e.remove(), o.disconnect();
    }
  };
}, n = "mq-speed-x", h = "mq-speed-y", m = "mq-tiled";
class b {
  constructor(t) {
    r(this, "root");
    r(this, "observer");
    r(this, "marquees", []);
    this.root = t ?? document.body, this.checkRoot(), this.watch();
  }
  isMarquee(t) {
    for (const e of this.marquees)
      if (e.element === t) return !0;
    return !1;
  }
  watch() {
    this.observer = new MutationObserver((t) => {
      for (const e of t)
        this.processElement(e.target);
    }), this.observer.observe(this.root, { attributeFilter: [n, h], subtree: !0 });
  }
  stop() {
    var t;
    (t = this.observer) == null || t.disconnect();
    for (const e of this.marquees)
      e.stop();
    this.marquees = [];
  }
  pause() {
    throw new Error("Not implemented");
  }
  checkRoot() {
    this.root.querySelectorAll(`[${n}], [${h}]`).forEach((e) => this.processElement(e));
  }
  elementShouldMarquee(t) {
    return t.hasAttribute(n) || t.hasAttribute(h);
  }
  processElement(t) {
    const e = this.elementShouldMarquee(t);
    if (this.isMarquee(t) && !e)
      for (const o of this.marquees)
        o.element === t && (o.stop(), this.marquees = this.marquees.filter((s) => s !== o));
    else if (!this.isMarquee(t) && e) {
      const o = g(t);
      o.start(), this.marquees.push(o);
    }
  }
}
export {
  m as DATA_MARQUEE_TILING,
  n as DATA_MARQUEE_X_SPEED,
  h as DATA_MARQUEE_Y_SPEED,
  b as Markii
};
