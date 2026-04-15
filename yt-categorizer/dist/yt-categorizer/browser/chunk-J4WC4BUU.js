import {
  PaginationService
} from "./chunk-3GRESYRR.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-OMGLG4XR.js";
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
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RBZGX75M.js";

// src/app/features/channels/channels.component.ts
var _forTrack0 = ($index, $item) => $item.name;
function ChannelsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading channels\u2026");
    \u0275\u0275elementEnd()();
  }
}
function ChannelsComponent_Conditional_10_For_7_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r3);
  }
}
function ChannelsComponent_Conditional_10_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "div", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 17)(5, "p", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 19);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 20)(10, "div", 21)(11, "span", 22);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 23);
    \u0275\u0275text(14, "Categorized");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 21)(16, "span", 24);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 23);
    \u0275\u0275text(19, "Uncategorized");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 21)(21, "span", 25);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 23);
    \u0275\u0275text(24, "Categories");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 26)(26, "div", 27);
    \u0275\u0275element(27, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 29);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 30);
    \u0275\u0275repeaterCreate(31, ChannelsComponent_Conditional_10_For_7_For_32_Template, 2, 1, "span", 31, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const channel_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(channel_r4.name.charAt(0).toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(channel_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", channel_r4.totalVideos, " videos");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(channel_r4.categorizedCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(channel_r4.uncategorizedCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(channel_r4.categories.size);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", ctx_r1.getCompletionPercentage(channel_r4), "%")("background", ctx_r1.getStatusColor(ctx_r1.getCompletionPercentage(channel_r4)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getCompletionPercentage(channel_r4), "%");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.getCategoryList(channel_r4));
  }
}
function ChannelsComponent_Conditional_10_Conditional_8_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function ChannelsComponent_Conditional_10_Conditional_8_For_4_Template_button_click_0_listener() {
      const p_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", p_r7 === ctx_r1.currentPage);
    \u0275\u0275property("disabled", p_r7 === "...");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r7);
  }
}
function ChannelsComponent_Conditional_10_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "button", 33);
    \u0275\u0275listener("click", function ChannelsComponent_Conditional_10_Conditional_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.prevPage());
    });
    \u0275\u0275text(2, "\u2190 Prev");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, ChannelsComponent_Conditional_10_Conditional_8_For_4_Template, 2, 4, "button", 34, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(5, "button", 33);
    \u0275\u0275listener("click", function ChannelsComponent_Conditional_10_Conditional_8_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275text(6, "Next \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 35);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.pageNumbers);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate4(" Showing ", ctx_r1.paginatedChannels.length, " of ", ctx_r1.filteredChannels.length, " channels \xA0\xB7\xA0 Page ", ctx_r1.currentPage, " of ", ctx_r1.totalPages, " ");
  }
}
function ChannelsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 9);
    \u0275\u0275element(2, "circle", 10)(3, "line", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function ChannelsComponent_Conditional_10_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchText, $event) || (ctx_r1.searchText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ChannelsComponent_Conditional_10_Template_input_input_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilter());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 13);
    \u0275\u0275repeaterCreate(6, ChannelsComponent_Conditional_10_For_7_Template, 33, 11, "div", 14, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, ChannelsComponent_Conditional_10_Conditional_8_Template, 9, 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchText);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.paginatedChannels);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.totalPages > 1 ? 8 : -1);
  }
}
function ChannelsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "p");
    \u0275\u0275text(2, "No channels found. Start by processing YouTube channels.");
    \u0275\u0275elementEnd()();
  }
}
var ChannelsComponent = class _ChannelsComponent {
  constructor(videoService, paginationService) {
    this.videoService = videoService;
    this.paginationService = paginationService;
    this.channels = [];
    this.loading = true;
    this.error = false;
    this.pageSize = 10;
    this.currentPage = 1;
    this.totalPages = 0;
    this.pageNumbers = [];
    this.paginatedChannels = [];
    this.searchText = "";
    this.filteredChannels = [];
  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.loading = true;
    this.error = false;
    this.videoService.getCategorizedVideos().pipe(finalize(() => {
      this.loading = false;
    })).subscribe({
      next: (data) => {
        this.extractChannelData(data);
        this.filteredChannels = [...this.channels];
        this.updatePagination();
      },
      error: () => {
        this.error = true;
      }
    });
  }
  extractChannelData(data) {
    const map = /* @__PURE__ */ new Map();
    (data?.categories ?? []).forEach((cat) => {
      (cat.videos ?? []).forEach((video) => {
        const name = video.channelName ?? "Unknown";
        if (!map.has(name)) {
          map.set(name, { name, totalVideos: 0, categories: /* @__PURE__ */ new Set(), categorizedCount: 0, uncategorizedCount: 0 });
        }
        const ch = map.get(name);
        ch.totalVideos++;
        ch.categories.add(cat.label ?? "");
        if ((cat.label ?? "") !== "Uncategorized")
          ch.categorizedCount++;
        else
          ch.uncategorizedCount++;
      });
    });
    this.channels = Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name));
  }
  updatePagination() {
    this.totalPages = this.paginationService.getTotalPages(this.filteredChannels.length, this.pageSize);
    this.currentPage = Math.min(this.currentPage, this.totalPages || 1);
    this.pageNumbers = this.paginationService.getPageNumbers(this.currentPage, this.totalPages);
    this.paginatedChannels = this.paginationService.paginate(this.filteredChannels, this.currentPage, this.pageSize);
  }
  goToPage(page) {
    if (typeof page === "number") {
      this.currentPage = page;
      this.updatePagination();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages)
      this.goToPage(this.currentPage + 1);
  }
  prevPage() {
    if (this.currentPage > 1)
      this.goToPage(this.currentPage - 1);
  }
  applyFilter() {
    this.currentPage = 1;
    const q = this.searchText.toLowerCase();
    this.filteredChannels = this.channels.filter((ch) => ch.name.toLowerCase().includes(q));
    this.updatePagination();
  }
  getCategoryList(channel) {
    return Array.from(channel.categories);
  }
  getCompletionPercentage(channel) {
    if (channel.totalVideos === 0)
      return 0;
    return Math.round(channel.categorizedCount / channel.totalVideos * 100);
  }
  getStatusColor(pct) {
    if (pct === 100)
      return "var(--success)";
    if (pct >= 75)
      return "#D97706";
    if (pct >= 50)
      return "#F59E0B";
    return "var(--danger)";
  }
  static {
    this.\u0275fac = function ChannelsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChannelsComponent)(\u0275\u0275directiveInject(VideoService), \u0275\u0275directiveInject(PaginationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChannelsComponent, selectors: [["app-channels"]], decls: 12, vars: 4, consts: [[1, "page-body"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "total-badge"], [1, "loading-state"], [1, "empty-state"], [1, "spinner-lg"], [1, "search-bar"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], ["type", "text", "placeholder", "Search channels\u2026", 3, "ngModelChange", "input", "ngModel"], [1, "channels-grid"], [1, "channel-card"], [1, "channel-top"], [1, "channel-avatar"], [1, "channel-info"], [1, "channel-name"], [1, "video-count"], [1, "channel-stats"], [1, "stat-item"], [1, "stat-val", "good"], [1, "stat-key"], [1, "stat-val", "bad"], [1, "stat-val"], [1, "progress-row"], [1, "progress-track"], [1, "progress-fill"], [1, "progress-label"], [1, "tags"], [1, "tag"], [1, "pagination"], [3, "click", "disabled"], [3, "active", "disabled"], [1, "page-info"]], template: function ChannelsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "All Channels");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "All channels from the database");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "span", 4);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(9, ChannelsComponent_Conditional_9_Template, 4, 0, "div", 5);
        \u0275\u0275conditionalCreate(10, ChannelsComponent_Conditional_10_Template, 9, 2);
        \u0275\u0275conditionalCreate(11, ChannelsComponent_Conditional_11_Template, 3, 0, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("", ctx.channels.length, " channels");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading && ctx.channels.length > 0 ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading && ctx.channels.length === 0 ? 11 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n.page-body[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n}\n@media (max-width: 900px) {\n  .page-body[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.4px;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-subtle);\n  margin-top: 3px;\n}\n.total-badge[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--primary);\n  background: rgba(153, 15, 250, 0.08);\n  border: 1px solid var(--border);\n  padding: 4px 12px;\n  border-radius: 20px;\n  align-self: flex-start;\n  white-space: nowrap;\n}\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  background: var(--surface-2);\n  border: 1.5px solid var(--border-strong);\n  border-radius: var(--radius-md);\n  margin-bottom: 20px;\n  max-width: 400px;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.search-bar[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(153, 15, 250, 0.12);\n}\n.search-bar[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: var(--text-subtle);\n  flex-shrink: 0;\n}\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-family: var(--font-primary);\n  font-size: 13px;\n  color: var(--text);\n}\n.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-subtle);\n}\n.channels-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.channel-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n  padding: 18px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  transition: box-shadow 0.15s, transform 0.15s;\n}\n.channel-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px);\n}\n.channel-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.channel-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--gradient-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: 700;\n  color: white;\n  flex-shrink: 0;\n}\n.channel-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.channel-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text);\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.video-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-subtle);\n}\n.channel-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  padding: 12px;\n  background: var(--surface-2);\n  border-radius: var(--radius-md);\n}\n.stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n.stat-val[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text);\n}\n.stat-val.good[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.stat-val.bad[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.stat-key[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--text-subtle);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  text-align: center;\n}\n.progress-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.progress-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  background: var(--surface-3);\n  border-radius: 3px;\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 3px;\n  transition: width 0.3s ease;\n}\n.progress-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  min-width: 36px;\n  text-align: right;\n}\n.tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.tag[_ngcontent-%COMP%] {\n  background: var(--surface-2);\n  border: 1px solid var(--border);\n  color: var(--text-muted);\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 8px;\n  border-radius: 20px;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  margin-bottom: 8px;\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border: 1.5px solid var(--border-strong);\n  background: var(--surface);\n  border-radius: var(--radius-md);\n  font-family: var(--font-primary);\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.15s;\n  min-width: 36px;\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--surface-2);\n  color: var(--primary);\n  border-color: var(--primary);\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pagination[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: white;\n  border-color: transparent;\n  font-weight: 600;\n}\n.page-info[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 12px;\n  color: var(--text-subtle);\n  margin-bottom: 20px;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n  gap: 14px;\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.spinner-lg[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n/*# sourceMappingURL=channels.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChannelsComponent, [{
    type: Component,
    args: [{ selector: "app-channels", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page-body">

  <div class="page-header">
    <div>
      <h1 class="page-title">All Channels</h1>
      <p class="page-subtitle">All channels from the database</p>
    </div>
    <span class="total-badge">{{ channels.length }} channels</span>
  </div>

  @if (loading) {
    <div class="loading-state">
      <div class="spinner-lg"></div>
      <p>Loading channels\u2026</p>
    </div>
  }

  @if (!loading && channels.length > 0) {
    <!-- Search -->
    <div class="search-bar">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2"
           stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
      <input type="text" [(ngModel)]="searchText" (input)="applyFilter()"
             placeholder="Search channels\u2026" />
    </div>

    <!-- Grid -->
    <div class="channels-grid">
      @for (channel of paginatedChannels; track channel.name) {
        <div class="channel-card">
          <div class="channel-top">
            <div class="channel-avatar">{{ channel.name.charAt(0).toUpperCase() }}</div>
            <div class="channel-info">
              <p class="channel-name">{{ channel.name }}</p>
              <span class="video-count">{{ channel.totalVideos }} videos</span>
            </div>
          </div>

          <div class="channel-stats">
            <div class="stat-item">
              <span class="stat-val good">{{ channel.categorizedCount }}</span>
              <span class="stat-key">Categorized</span>
            </div>
            <div class="stat-item">
              <span class="stat-val bad">{{ channel.uncategorizedCount }}</span>
              <span class="stat-key">Uncategorized</span>
            </div>
            <div class="stat-item">
              <span class="stat-val">{{ channel.categories.size }}</span>
              <span class="stat-key">Categories</span>
            </div>
          </div>

          <div class="progress-row">
            <div class="progress-track">
              <div class="progress-fill"
                   [style.width.%]="getCompletionPercentage(channel)"
                   [style.background]="getStatusColor(getCompletionPercentage(channel))">
              </div>
            </div>
            <span class="progress-label">{{ getCompletionPercentage(channel) }}%</span>
          </div>

          <div class="tags">
            @for (cat of getCategoryList(channel); track cat) {
              <span class="tag">{{ cat }}</span>
            }
          </div>
        </div>
      }
    </div>

    <!-- Pagination -->
    @if (totalPages > 1) {
      <div class="pagination">
        <button [disabled]="currentPage === 1" (click)="prevPage()">\u2190 Prev</button>

        @for (p of pageNumbers; track p) {
          <button (click)="goToPage(p)" [class.active]="p === currentPage" [disabled]="p === '...'">{{ p }}</button>
        }

        <button [disabled]="currentPage === totalPages" (click)="nextPage()">Next \u2192</button>
      </div>

      <p class="page-info">
        Showing {{ paginatedChannels.length }} of {{ filteredChannels.length }} channels &nbsp;\xB7&nbsp;
        Page {{ currentPage }} of {{ totalPages }}
      </p>
    }
  }

  @if (!loading && channels.length === 0) {
    <div class="empty-state">
      <p>No channels found. Start by processing YouTube channels.</p>
    </div>
  }

</div>
`, styles: ["/* src/app/features/channels/channels.component.scss */\n.page-body {\n  padding: 28px 32px;\n}\n@media (max-width: 900px) {\n  .page-body {\n    padding: 20px 16px;\n  }\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.page-title {\n  font-family: var(--font-display);\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.4px;\n}\n.page-subtitle {\n  font-size: 12px;\n  color: var(--text-subtle);\n  margin-top: 3px;\n}\n.total-badge {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--primary);\n  background: rgba(153, 15, 250, 0.08);\n  border: 1px solid var(--border);\n  padding: 4px 12px;\n  border-radius: 20px;\n  align-self: flex-start;\n  white-space: nowrap;\n}\n.search-bar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  background: var(--surface-2);\n  border: 1.5px solid var(--border-strong);\n  border-radius: var(--radius-md);\n  margin-bottom: 20px;\n  max-width: 400px;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.search-bar:focus-within {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(153, 15, 250, 0.12);\n}\n.search-bar svg {\n  color: var(--text-subtle);\n  flex-shrink: 0;\n}\n.search-bar input {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-family: var(--font-primary);\n  font-size: 13px;\n  color: var(--text);\n}\n.search-bar input::placeholder {\n  color: var(--text-subtle);\n}\n.channels-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.channel-card {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n  padding: 18px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  transition: box-shadow 0.15s, transform 0.15s;\n}\n.channel-card:hover {\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px);\n}\n.channel-top {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.channel-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--gradient-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: 700;\n  color: white;\n  flex-shrink: 0;\n}\n.channel-info {\n  flex: 1;\n  min-width: 0;\n}\n.channel-name {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text);\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.video-count {\n  font-size: 12px;\n  color: var(--text-subtle);\n}\n.channel-stats {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n  padding: 12px;\n  background: var(--surface-2);\n  border-radius: var(--radius-md);\n}\n.stat-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n.stat-val {\n  font-family: var(--font-display);\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text);\n}\n.stat-val.good {\n  color: var(--success);\n}\n.stat-val.bad {\n  color: var(--danger);\n}\n.stat-key {\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--text-subtle);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  text-align: center;\n}\n.progress-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.progress-track {\n  flex: 1;\n  height: 6px;\n  background: var(--surface-3);\n  border-radius: 3px;\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  border-radius: 3px;\n  transition: width 0.3s ease;\n}\n.progress-label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  min-width: 36px;\n  text-align: right;\n}\n.tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.tag {\n  background: var(--surface-2);\n  border: 1px solid var(--border);\n  color: var(--text-muted);\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 8px;\n  border-radius: 20px;\n}\n.pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  margin-bottom: 8px;\n}\n.pagination button {\n  padding: 6px 12px;\n  border: 1.5px solid var(--border-strong);\n  background: var(--surface);\n  border-radius: var(--radius-md);\n  font-family: var(--font-primary);\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.15s;\n  min-width: 36px;\n}\n.pagination button:hover:not(:disabled) {\n  background: var(--surface-2);\n  color: var(--primary);\n  border-color: var(--primary);\n}\n.pagination button:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pagination button.active {\n  background: var(--gradient-primary);\n  color: white;\n  border-color: transparent;\n  font-weight: 600;\n}\n.page-info {\n  text-align: center;\n  font-size: 12px;\n  color: var(--text-subtle);\n  margin-bottom: 20px;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n  gap: 14px;\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.spinner-lg {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state {\n  text-align: center;\n  padding: 60px 20px;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n/*# sourceMappingURL=channels.component.css.map */\n"] }]
  }], () => [{ type: VideoService }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChannelsComponent, { className: "ChannelsComponent", filePath: "app/features/channels/channels.component.ts", lineNumber: 24 });
})();
export {
  ChannelsComponent
};
//# sourceMappingURL=chunk-J4WC4BUU.js.map
