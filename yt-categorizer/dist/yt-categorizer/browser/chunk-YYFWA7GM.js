import {
  VideoService
} from "./chunk-B2TFZERZ.js";
import {
  CommonModule,
  Component,
  finalize,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RBZGX75M.js";

// src/app/features/reports/reports.component.ts
var _forTrack0 = ($index, $item) => $item.label;
function ReportsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 4);
    \u0275\u0275domElement(1, "div", 5);
    \u0275\u0275domElementStart(2, "p");
    \u0275\u0275text(3, "Loading reports\u2026");
    \u0275\u0275domElementEnd()();
  }
}
function ReportsComponent_Conditional_8_For_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 24)(1, "div", 26)(2, "span", 27);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 28)(5, "span", 29);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "span", 30);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "span", 31);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(11, "div", 32);
    \u0275\u0275domElement(12, "div", 33);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cat_r1.label);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", cat_r1.videoCount, " videos");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", cat_r1.channelCount, " channels");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", cat_r1.percentage, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", cat_r1.percentage, "%")("background", ctx_r1.getBarColor(cat_r1.percentage));
  }
}
function ReportsComponent_Conditional_8_For_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td", 34);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td", 35);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td", 35);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "td", 36)(8, "span", 37);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r3.videoCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r3.channelCount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", cat_r3.percentage, "%");
  }
}
function ReportsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6)(1, "div", 7)(2, "div", 8);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 9);
    \u0275\u0275text(5, "Total Videos");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 7)(7, "div", 8);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "div", 9);
    \u0275\u0275text(10, "Channels");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(11, "div", 7)(12, "div", 8);
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "div", 9);
    \u0275\u0275text(15, "Categories");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(16, "div", 10)(17, "div", 8);
    \u0275\u0275text(18);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(19, "div", 9);
    \u0275\u0275text(20, "Categorized");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(21, "div", 11)(22, "h2", 12);
    \u0275\u0275text(23, "Categorization Summary");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(24, "div", 13)(25, "div", 14)(26, "div", 15)(27, "span");
    \u0275\u0275text(28, "Categorized");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(29, "strong");
    \u0275\u0275text(30);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(31, "div", 16);
    \u0275\u0275domElement(32, "div", 17);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(33, "div", 14)(34, "div", 15)(35, "span");
    \u0275\u0275text(36, "Uncategorized");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(37, "strong");
    \u0275\u0275text(38);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(39, "div", 16);
    \u0275\u0275domElement(40, "div", 18);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(41, "div", 19)(42, "div", 20)(43, "span", 21);
    \u0275\u0275text(44);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(45, "span", 22);
    \u0275\u0275text(46, "Avg videos / category");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(47, "div", 20)(48, "span", 21);
    \u0275\u0275text(49);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(50, "span", 22);
    \u0275\u0275text(51, "Avg videos / channel");
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275domElementStart(52, "div", 11)(53, "h2", 12);
    \u0275\u0275text(54, "Category Distribution");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(55, "div", 23);
    \u0275\u0275repeaterCreate(56, ReportsComponent_Conditional_8_For_57_Template, 13, 8, "div", 24, _forTrack0);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(58, "div", 11)(59, "h2", 12);
    \u0275\u0275text(60, "Category Details");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(61, "div", 25)(62, "table")(63, "thead")(64, "tr")(65, "th");
    \u0275\u0275text(66, "Category");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(67, "th");
    \u0275\u0275text(68, "Videos");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(69, "th");
    \u0275\u0275text(70, "Channels");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(71, "th");
    \u0275\u0275text(72, "Share");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(73, "tbody");
    \u0275\u0275repeaterCreate(74, ReportsComponent_Conditional_8_For_75_Template, 10, 4, "tr", null, _forTrack0);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.metrics.totalVideos);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.metrics.totalChannels);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.metrics.totalCategories);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.metrics.categorization, "%");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.metrics.categorizedVideos);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.metrics.categorization, "%");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.metrics.uncategorizedVideos);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", 100 - ctx_r1.metrics.categorization, "%");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.metrics.avgVideosPerCategory);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.metrics.avgVideosPerChannel);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r1.categoryReports);
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r1.categoryReports);
  }
}
var ReportsComponent = class _ReportsComponent {
  constructor(videoService) {
    this.videoService = videoService;
    this.loading = true;
    this.error = false;
    this.metrics = null;
    this.categoryReports = [];
  }
  ngOnInit() {
    this.loadReports();
  }
  loadReports() {
    this.loading = true;
    this.error = false;
    this.videoService.getCategorizedVideos().pipe(finalize(() => {
      this.loading = false;
    })).subscribe({
      next: (data) => {
        this.calculateMetrics(data);
      },
      error: () => {
        this.error = true;
      }
    });
  }
  calculateMetrics(data) {
    let totalVideos = 0, categorizedVideos = 0, uncategorizedVideos = 0;
    const channelSet = /* @__PURE__ */ new Set();
    const reportMap = /* @__PURE__ */ new Map();
    (data?.categories ?? []).forEach((cat) => {
      const label = cat.label ?? "";
      const count = cat.videos?.length ?? 0;
      totalVideos += count;
      if (label === "Uncategorized")
        uncategorizedVideos += count;
      else
        categorizedVideos += count;
      (cat.videos ?? []).forEach((v) => channelSet.add(v.channelName ?? ""));
      if (!reportMap.has(label))
        reportMap.set(label, { count: 0, channels: /* @__PURE__ */ new Set() });
      const r = reportMap.get(label);
      r.count += count;
      (cat.videos ?? []).forEach((v) => r.channels.add(v.channelName ?? ""));
    });
    const totalCategories = reportMap.size;
    const totalChannels = channelSet.size;
    this.metrics = {
      totalVideos,
      totalChannels,
      totalCategories,
      categorizedVideos,
      uncategorizedVideos,
      categorization: totalVideos > 0 ? Math.round(categorizedVideos / totalVideos * 100) : 0,
      avgVideosPerCategory: totalCategories > 0 ? Math.round(totalVideos / totalCategories) : 0,
      avgVideosPerChannel: totalChannels > 0 ? Math.round(totalVideos / totalChannels) : 0
    };
    this.categoryReports = Array.from(reportMap.entries()).map(([label, d]) => ({
      label,
      videoCount: d.count,
      channelCount: d.channels.size,
      percentage: totalVideos > 0 ? Math.round(d.count / totalVideos * 100) : 0
    })).sort((a, b) => b.videoCount - a.videoCount);
  }
  getBarColor(pct) {
    if (pct >= 50)
      return "var(--primary)";
    if (pct >= 25)
      return "var(--secondary)";
    return "var(--primary-light)";
  }
  static {
    this.\u0275fac = function ReportsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportsComponent)(\u0275\u0275directiveInject(VideoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsComponent, selectors: [["app-reports"]], decls: 9, vars: 2, consts: [[1, "page-body"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "loading-state"], [1, "spinner-lg"], [1, "metrics-grid"], [1, "metric-card"], [1, "metric-num"], [1, "metric-lbl"], [1, "metric-card", "accent"], [1, "section-card"], [1, "section-title"], [1, "summary-row"], [1, "summary-item"], [1, "summary-head"], [1, "bar-track"], [1, "bar-fill", "success"], [1, "bar-fill", "danger"], [1, "averages"], [1, "avg-pill"], [1, "avg-num"], [1, "avg-lbl"], [1, "distribution-list"], [1, "dist-item"], [1, "table-wrap"], [1, "dist-head"], [1, "dist-name"], [1, "dist-badges"], [1, "badge"], [1, "badge", "muted"], [1, "badge", "accent"], [1, "bar-track", "slim"], [1, "bar-fill", "primary"], [1, "td-name"], [1, "td-num"], [1, "td-pct"], [1, "pct-badge"]], template: function ReportsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Analytics & Reports");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(5, "p", 3);
        \u0275\u0275text(6, "Analytics from the database");
        \u0275\u0275domElementEnd()()();
        \u0275\u0275conditionalCreate(7, ReportsComponent_Conditional_7_Template, 4, 0, "div", 4);
        \u0275\u0275conditionalCreate(8, ReportsComponent_Conditional_8_Template, 76, 12);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.loading ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading && !ctx.error && ctx.metrics ? 8 : -1);
      }
    }, dependencies: [CommonModule], styles: ["\n.page-body[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n}\n@media (max-width: 900px) {\n  .page-body[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.4px;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-subtle);\n  margin-top: 3px;\n}\n.metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.metric-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.metric-card.accent[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  border-color: transparent;\n}\n.metric-card.accent[_ngcontent-%COMP%]   .metric-num[_ngcontent-%COMP%], \n.metric-card.accent[_ngcontent-%COMP%]   .metric-lbl[_ngcontent-%COMP%] {\n  color: white;\n}\n.metric-card.accent[_ngcontent-%COMP%]   .metric-lbl[_ngcontent-%COMP%] {\n  opacity: 0.85;\n}\n.metric-num[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 28px;\n  font-weight: 700;\n  background: var(--gradient-primary);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  line-height: 1.1;\n}\n.metric-lbl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-subtle);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.section-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n  padding: 20px 24px;\n  margin-bottom: 16px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text);\n  margin-bottom: 18px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid var(--border);\n}\n.summary-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.summary-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.summary-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.summary-head[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text);\n  font-weight: 700;\n}\n.bar-track[_ngcontent-%COMP%] {\n  height: 10px;\n  background: var(--surface-3);\n  border-radius: 5px;\n  overflow: hidden;\n}\n.bar-track.slim[_ngcontent-%COMP%] {\n  height: 6px;\n  margin-top: 6px;\n}\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 5px;\n  transition: width 0.4s ease;\n}\n.bar-fill.success[_ngcontent-%COMP%] {\n  background: var(--success);\n}\n.bar-fill.danger[_ngcontent-%COMP%] {\n  background: var(--danger);\n}\n.bar-fill.primary[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n}\n.averages[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.avg-pill[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: var(--surface-2);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 12px 24px;\n  flex: 1;\n  min-width: 160px;\n}\n.avg-num[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 24px;\n  font-weight: 700;\n  background: var(--gradient-primary);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.avg-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-subtle);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-top: 2px;\n  text-align: center;\n}\n.distribution-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.dist-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.dist-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 4px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.dist-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text);\n}\n.dist-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: rgba(153, 15, 250, 0.08);\n  color: var(--primary);\n  border: 1px solid var(--border);\n}\n.badge.muted[_ngcontent-%COMP%] {\n  background: var(--surface-2);\n  color: var(--text-muted);\n}\n.badge.accent[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: white;\n  border-color: transparent;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--surface-2);\n  border-bottom: 1px solid var(--border);\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border);\n  transition: background 0.1s;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 13px;\n}\n.td-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text);\n  width: 45%;\n}\n.td-num[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  text-align: center;\n}\n.td-pct[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.pct-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: rgba(153, 15, 250, 0.08);\n  color: var(--primary);\n  border: 1px solid var(--border);\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n  gap: 14px;\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.spinner-lg[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=reports.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsComponent, [{
    type: Component,
    args: [{ selector: "app-reports", standalone: true, imports: [CommonModule], template: '<div class="page-body">\n\n  <div class="page-header">\n    <div>\n      <h1 class="page-title">Analytics & Reports</h1>\n      <p class="page-subtitle">Analytics from the database</p>\n    </div>\n  </div>\n\n  @if (loading) {\n    <div class="loading-state">\n      <div class="spinner-lg"></div>\n      <p>Loading reports\u2026</p>\n    </div>\n  }\n\n  @if (!loading && !error && metrics) {\n    <!-- Key metrics -->\n    <div class="metrics-grid">\n      <div class="metric-card">\n        <div class="metric-num">{{ metrics.totalVideos }}</div>\n        <div class="metric-lbl">Total Videos</div>\n      </div>\n      <div class="metric-card">\n        <div class="metric-num">{{ metrics.totalChannels }}</div>\n        <div class="metric-lbl">Channels</div>\n      </div>\n      <div class="metric-card">\n        <div class="metric-num">{{ metrics.totalCategories }}</div>\n        <div class="metric-lbl">Categories</div>\n      </div>\n      <div class="metric-card accent">\n        <div class="metric-num">{{ metrics.categorization }}%</div>\n        <div class="metric-lbl">Categorized</div>\n      </div>\n    </div>\n\n    <!-- Summary bars -->\n    <div class="section-card">\n      <h2 class="section-title">Categorization Summary</h2>\n      <div class="summary-row">\n        <div class="summary-item">\n          <div class="summary-head">\n            <span>Categorized</span>\n            <strong>{{ metrics.categorizedVideos }}</strong>\n          </div>\n          <div class="bar-track">\n            <div class="bar-fill success" [style.width.%]="metrics.categorization"></div>\n          </div>\n        </div>\n        <div class="summary-item">\n          <div class="summary-head">\n            <span>Uncategorized</span>\n            <strong>{{ metrics.uncategorizedVideos }}</strong>\n          </div>\n          <div class="bar-track">\n            <div class="bar-fill danger" [style.width.%]="100 - metrics.categorization"></div>\n          </div>\n        </div>\n      </div>\n\n      <div class="averages">\n        <div class="avg-pill">\n          <span class="avg-num">{{ metrics.avgVideosPerCategory }}</span>\n          <span class="avg-lbl">Avg videos / category</span>\n        </div>\n        <div class="avg-pill">\n          <span class="avg-num">{{ metrics.avgVideosPerChannel }}</span>\n          <span class="avg-lbl">Avg videos / channel</span>\n        </div>\n      </div>\n    </div>\n\n    <!-- Distribution -->\n    <div class="section-card">\n      <h2 class="section-title">Category Distribution</h2>\n      <div class="distribution-list">\n        @for (cat of categoryReports; track cat.label) {\n          <div class="dist-item">\n            <div class="dist-head">\n              <span class="dist-name">{{ cat.label }}</span>\n              <div class="dist-badges">\n                <span class="badge">{{ cat.videoCount }} videos</span>\n                <span class="badge muted">{{ cat.channelCount }} channels</span>\n                <span class="badge accent">{{ cat.percentage }}%</span>\n              </div>\n            </div>\n            <div class="bar-track slim">\n              <div class="bar-fill primary" [style.width.%]="cat.percentage"\n                   [style.background]="getBarColor(cat.percentage)"></div>\n            </div>\n          </div>\n        }\n      </div>\n    </div>\n\n    <!-- Details table -->\n    <div class="section-card">\n      <h2 class="section-title">Category Details</h2>\n      <div class="table-wrap">\n        <table>\n          <thead>\n            <tr>\n              <th>Category</th>\n              <th>Videos</th>\n              <th>Channels</th>\n              <th>Share</th>\n            </tr>\n          </thead>\n          <tbody>\n            @for (cat of categoryReports; track cat.label) {\n              <tr>\n                <td class="td-name">{{ cat.label }}</td>\n                <td class="td-num">{{ cat.videoCount }}</td>\n                <td class="td-num">{{ cat.channelCount }}</td>\n                <td class="td-pct">\n                  <span class="pct-badge">{{ cat.percentage }}%</span>\n                </td>\n              </tr>\n            }\n          </tbody>\n        </table>\n      </div>\n    </div>\n  }\n\n</div>\n', styles: ["/* src/app/features/reports/reports.component.scss */\n.page-body {\n  padding: 28px 32px;\n}\n@media (max-width: 900px) {\n  .page-body {\n    padding: 20px 16px;\n  }\n}\n.page-header {\n  margin-bottom: 24px;\n}\n.page-title {\n  font-family: var(--font-display);\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.4px;\n}\n.page-subtitle {\n  font-size: 12px;\n  color: var(--text-subtle);\n  margin-top: 3px;\n}\n.metrics-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.metric-card {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.metric-card.accent {\n  background: var(--gradient-primary);\n  border-color: transparent;\n}\n.metric-card.accent .metric-num,\n.metric-card.accent .metric-lbl {\n  color: white;\n}\n.metric-card.accent .metric-lbl {\n  opacity: 0.85;\n}\n.metric-num {\n  font-family: var(--font-display);\n  font-size: 28px;\n  font-weight: 700;\n  background: var(--gradient-primary);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  line-height: 1.1;\n}\n.metric-lbl {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-subtle);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.section-card {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n  padding: 20px 24px;\n  margin-bottom: 16px;\n}\n.section-title {\n  font-family: var(--font-display);\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text);\n  margin-bottom: 18px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid var(--border);\n}\n.summary-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.summary-item {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.summary-head {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.summary-head strong {\n  color: var(--text);\n  font-weight: 700;\n}\n.bar-track {\n  height: 10px;\n  background: var(--surface-3);\n  border-radius: 5px;\n  overflow: hidden;\n}\n.bar-track.slim {\n  height: 6px;\n  margin-top: 6px;\n}\n.bar-fill {\n  height: 100%;\n  border-radius: 5px;\n  transition: width 0.4s ease;\n}\n.bar-fill.success {\n  background: var(--success);\n}\n.bar-fill.danger {\n  background: var(--danger);\n}\n.bar-fill.primary {\n  background: var(--gradient-primary);\n}\n.averages {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.avg-pill {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: var(--surface-2);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 12px 24px;\n  flex: 1;\n  min-width: 160px;\n}\n.avg-num {\n  font-family: var(--font-display);\n  font-size: 24px;\n  font-weight: 700;\n  background: var(--gradient-primary);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.avg-lbl {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-subtle);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-top: 2px;\n  text-align: center;\n}\n.distribution-list {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.dist-item {\n  display: flex;\n  flex-direction: column;\n}\n.dist-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 4px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.dist-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text);\n}\n.dist-badges {\n  display: flex;\n  gap: 6px;\n}\n.badge {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 20px;\n  background: rgba(153, 15, 250, 0.08);\n  color: var(--primary);\n  border: 1px solid var(--border);\n}\n.badge.muted {\n  background: var(--surface-2);\n  color: var(--text-muted);\n}\n.badge.accent {\n  background: var(--gradient-primary);\n  color: white;\n  border-color: transparent;\n}\n.table-wrap {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable thead {\n  background: var(--surface-2);\n  border-bottom: 1px solid var(--border);\n}\ntable thead th {\n  padding: 10px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\ntable tbody tr {\n  border-bottom: 1px solid var(--border);\n  transition: background 0.1s;\n}\ntable tbody tr:last-child {\n  border-bottom: none;\n}\ntable tbody tr:hover {\n  background: var(--surface-2);\n}\ntable tbody tr td {\n  padding: 10px 14px;\n  font-size: 13px;\n}\n.td-name {\n  font-weight: 600;\n  color: var(--text);\n  width: 45%;\n}\n.td-num {\n  color: var(--text-muted);\n  text-align: center;\n}\n.td-pct {\n  text-align: center;\n}\n.pct-badge {\n  display: inline-block;\n  background: rgba(153, 15, 250, 0.08);\n  color: var(--primary);\n  border: 1px solid var(--border);\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n  gap: 14px;\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.spinner-lg {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=reports.component.css.map */\n"] }]
  }], () => [{ type: VideoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsComponent, { className: "ReportsComponent", filePath: "app/features/reports/reports.component.ts", lineNumber: 32 });
})();
export {
  ReportsComponent
};
//# sourceMappingURL=chunk-YYFWA7GM.js.map
