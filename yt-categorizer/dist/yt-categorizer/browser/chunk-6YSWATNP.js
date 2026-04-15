import {
  PaginationService
} from "./chunk-3GRESYRR.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-OMGLG4XR.js";
import {
  VideoService
} from "./chunk-B2TFZERZ.js";
import {
  CommonModule,
  Component,
  SlicePipe,
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
  ɵɵpipe,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RBZGX75M.js";

// src/app/features/results/results.component.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.videoId;
function ResultsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "div", 12);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading results\u2026");
    \u0275\u0275elementEnd()();
  }
}
function ResultsComponent_Conditional_16_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    \u0275\u0275property("value", cat_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r3);
  }
}
function ResultsComponent_Conditional_16_For_31_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "p", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 35);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "slice");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const video_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(video_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(video_r4.channelName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind3(7, 3, video_r4.description, 0, 120), "\u2026");
  }
}
function ResultsComponent_Conditional_16_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 31);
    \u0275\u0275repeaterCreate(7, ResultsComponent_Conditional_16_For_31_For_8_Template, 8, 7, "div", 32, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(category_r5.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", category_r5.videos.length, " video", category_r5.videos.length !== 1 ? "s" : "");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(category_r5.videos);
  }
}
function ResultsComponent_Conditional_16_Conditional_32_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function ResultsComponent_Conditional_16_Conditional_32_For_4_Template_button_click_0_listener() {
      const p_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", p_r8 === ctx_r1.currentPage);
    \u0275\u0275property("disabled", p_r8 === "...");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r8);
  }
}
function ResultsComponent_Conditional_16_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "button", 37);
    \u0275\u0275listener("click", function ResultsComponent_Conditional_16_Conditional_32_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.prevPage());
    });
    \u0275\u0275text(2, "\u2190 Prev");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, ResultsComponent_Conditional_16_Conditional_32_For_4_Template, 2, 4, "button", 38, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(5, "button", 37);
    \u0275\u0275listener("click", function ResultsComponent_Conditional_16_Conditional_32_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275text(6, "Next \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 39);
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
    \u0275\u0275textInterpolate3(" Page ", ctx_r1.currentPage, " of ", ctx_r1.totalPages, " \xA0\xB7\xA0 ", ctx_r1.filteredCategories.length, " categories ");
  }
}
function ResultsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "span", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 16);
    \u0275\u0275text(5, "Videos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 14)(7, "span", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 16);
    \u0275\u0275text(10, "Categories");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 14)(12, "span", 15);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 16);
    \u0275\u0275text(15, "Showing");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 17)(17, "div", 18)(18, "label", 19);
    \u0275\u0275text(19, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "select", 20);
    \u0275\u0275twoWayListener("ngModelChange", function ResultsComponent_Conditional_16_Template_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedCategory, $event) || (ctx_r1.selectedCategory = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ResultsComponent_Conditional_16_Template_select_change_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFilterChange());
    });
    \u0275\u0275elementStart(21, "option", 21);
    \u0275\u0275text(22, "All Categories");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(23, ResultsComponent_Conditional_16_For_24_Template, 2, 2, "option", 22, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 23)(26, "label", 24);
    \u0275\u0275text(27, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ResultsComponent_Conditional_16_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchText, $event) || (ctx_r1.searchText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ResultsComponent_Conditional_16_Template_input_input_28_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFilterChange());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 26);
    \u0275\u0275repeaterCreate(30, ResultsComponent_Conditional_16_For_31_Template, 9, 3, "div", 27, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(32, ResultsComponent_Conditional_16_Conditional_32_Template, 9, 5);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getTotalVideoCount());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getCategories().length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.filteredCategories.length);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedCategory);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.getCategories());
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchText);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.paginatedCategories);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.totalPages > 1 ? 32 : -1);
  }
}
function ResultsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "p");
    \u0275\u0275text(2, "No results found. Process some channels first.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 9);
    \u0275\u0275listener("click", function ResultsComponent_Conditional_17_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadData());
    });
    \u0275\u0275text(4, "Retry");
    \u0275\u0275elementEnd()();
  }
}
var ResultsComponent = class _ResultsComponent {
  constructor(videoService, paginationService) {
    this.videoService = videoService;
    this.paginationService = paginationService;
    this.data = null;
    this.loading = true;
    this.error = false;
    this.pageSize = 10;
    this.currentPage = 1;
    this.totalPages = 0;
    this.pageNumbers = [];
    this.paginatedCategories = [];
    this.selectedCategory = "all";
    this.searchText = "";
    this.filteredCategories = [];
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
        this.data = data;
        this.applyFilters();
      },
      error: () => {
        this.data = null;
        this.error = true;
      }
    });
  }
  updatePagination() {
    this.totalPages = this.paginationService.getTotalPages(this.filteredCategories.length, this.pageSize);
    this.currentPage = Math.min(this.currentPage, this.totalPages || 1);
    this.pageNumbers = this.paginationService.getPageNumbers(this.currentPage, this.totalPages);
    this.paginatedCategories = this.paginationService.paginate(this.filteredCategories, this.currentPage, this.pageSize);
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
  onFilterChange() {
    this.currentPage = 1;
    this.applyFilters();
  }
  applyFilters() {
    const cats = this.data?.categories ?? [];
    const q = this.searchText.toLowerCase();
    this.filteredCategories = cats.filter((cat) => {
      const matchesCat = this.selectedCategory === "all" || (cat.label ?? "") === this.selectedCategory;
      const matchesSearch = !q || (cat.label ?? "").toLowerCase().includes(q) || (cat.videos ?? []).some((v) => (v.title ?? "").toLowerCase().includes(q));
      return matchesCat && matchesSearch;
    });
    this.updatePagination();
  }
  getCategories() {
    return (this.data?.categories ?? []).map((c) => c.label ?? "");
  }
  getTotalVideoCount() {
    return (this.data?.categories ?? []).reduce((sum, c) => sum + (c.videos?.length ?? 0), 0);
  }
  exportToCSV() {
    const cats = this.data?.categories;
    if (!cats?.length)
      return;
    let csv = "Category,Title,Channel,Description\n";
    cats.forEach((cat) => {
      (cat.videos ?? []).forEach((v) => {
        csv += `${this.esc(cat.label)},${this.esc(v.title)},${this.esc(v.channelName)},${this.esc(v.description)}
`;
      });
    });
    const a = document.createElement("a");
    a.href = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
    a.download = "categorized-videos.csv";
    a.click();
  }
  esc(v) {
    const s = v ?? "";
    return s.includes(",") || s.includes('"') || s.includes("\n") ? `"${s.replace(/"/g, '""')}"` : s;
  }
  static {
    this.\u0275fac = function ResultsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ResultsComponent)(\u0275\u0275directiveInject(VideoService), \u0275\u0275directiveInject(PaginationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResultsComponent, selectors: [["app-results"]], decls: 18, vars: 3, consts: [[1, "page-body"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "1 4 1 10 7 10"], ["d", "M3.51 15a9 9 0 1 0 .49-3.5"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "loading-state"], [1, "empty-state"], [1, "spinner-lg"], [1, "stats-strip"], [1, "stat-pill"], [1, "stat-num"], [1, "stat-lbl"], [1, "filters-bar"], [1, "filter-group"], ["for", "cat-filter"], ["id", "cat-filter", 3, "ngModelChange", "change", "ngModel"], ["value", "all"], [3, "value"], [1, "filter-group", "filter-grow"], ["for", "search"], ["id", "search", "type", "text", "placeholder", "Search by title or category\u2026", 3, "ngModelChange", "input", "ngModel"], [1, "results-list"], [1, "category-card"], [1, "category-header"], [1, "cat-label"], [1, "cat-count"], [1, "videos-grid"], [1, "video-item"], [1, "video-title"], [1, "video-channel"], [1, "video-desc"], [1, "pagination"], [3, "click", "disabled"], [3, "active", "disabled"], [1, "page-info"]], template: function ResultsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Categorized Results");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Categorized videos from the database");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
        \u0275\u0275listener("click", function ResultsComponent_Template_button_click_8_listener() {
          return ctx.loadData();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(9, "svg", 6);
        \u0275\u0275element(10, "polyline", 7)(11, "path", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " Refresh ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(13, "button", 9);
        \u0275\u0275listener("click", function ResultsComponent_Template_button_click_13_listener() {
          return ctx.exportToCSV();
        });
        \u0275\u0275text(14, " Export CSV ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(15, ResultsComponent_Conditional_15_Template, 4, 0, "div", 10);
        \u0275\u0275conditionalCreate(16, ResultsComponent_Conditional_16_Template, 33, 6);
        \u0275\u0275conditionalCreate(17, ResultsComponent_Conditional_17_Template, 5, 0, "div", 11);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275conditional(ctx.loading ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading && ctx.data ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading && !ctx.data ? 17 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, SlicePipe], styles: ["\n.page-body[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n}\n@media (max-width: 900px) {\n  .page-body[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.4px;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-subtle);\n  margin-top: 3px;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  flex-shrink: 0;\n}\n.stats-strip[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.stat-pill[_ngcontent-%COMP%] {\n  background: var(--surface-2);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 10px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 90px;\n}\n.stat-num[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 22px;\n  font-weight: 700;\n  background: var(--gradient-primary);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  line-height: 1.1;\n}\n.stat-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-subtle);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-top: 2px;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n  padding: 16px;\n  background: var(--surface-2);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  min-width: 160px;\n}\n.filter-group.filter-grow[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.filter-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1.5px solid var(--border-strong);\n  border-radius: var(--radius-md);\n  font-family: var(--font-primary);\n  font-size: 13px;\n  color: var(--text);\n  background: var(--surface);\n  outline: none;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.filter-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(153, 15, 250, 0.12);\n}\n.results-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.category-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n  overflow: hidden;\n}\n.category-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 14px 20px;\n  background: var(--surface-2);\n  border-bottom: 1px solid var(--border);\n}\n.cat-label[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text);\n}\n.cat-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--primary);\n  background: rgba(153, 15, 250, 0.08);\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n.videos-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1px;\n  background: var(--border);\n}\n.video-item[_ngcontent-%COMP%] {\n  background: var(--surface);\n  padding: 14px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  transition: background 0.12s;\n}\n.video-item[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n}\n.video-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text);\n  line-height: 1.4;\n  margin: 0;\n}\n.video-channel[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--primary);\n  font-weight: 500;\n  margin: 0;\n}\n.video-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-subtle);\n  line-height: 1.5;\n  margin: 0;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  margin-bottom: 8px;\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border: 1.5px solid var(--border-strong);\n  background: var(--surface);\n  border-radius: var(--radius-md);\n  font-family: var(--font-primary);\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.15s;\n  min-width: 36px;\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--surface-2);\n  color: var(--primary);\n  border-color: var(--primary);\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pagination[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: white;\n  border-color: transparent;\n  font-weight: 600;\n}\n.page-info[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 12px;\n  color: var(--text-subtle);\n  margin-bottom: 20px;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n  gap: 14px;\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.spinner-lg[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: var(--text-muted);\n  font-size: 14px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n/*# sourceMappingURL=results.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResultsComponent, [{
    type: Component,
    args: [{ selector: "app-results", standalone: true, imports: [CommonModule, SlicePipe, FormsModule], template: `<div class="page-body">

  <div class="page-header">
    <div>
      <h1 class="page-title">Categorized Results</h1>
      <p class="page-subtitle">Categorized videos from the database</p>
    </div>
    <div class="header-actions">
      <button class="btn btn-ghost btn-sm" (click)="loadData()">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2.5"
             stroke-linecap="round" stroke-linejoin="round">
          <polyline points="1 4 1 10 7 10"/>
          <path d="M3.51 15a9 9 0 1 0 .49-3.5"/>
        </svg>
        Refresh
      </button>
      <button class="btn btn-primary btn-sm" (click)="exportToCSV()">
        Export CSV
      </button>
    </div>
  </div>

  @if (loading) {
    <div class="loading-state">
      <div class="spinner-lg"></div>
      <p>Loading results\u2026</p>
    </div>
  }

  @if (!loading && data) {
    <!-- Stats strip -->
    <div class="stats-strip">
      <div class="stat-pill">
        <span class="stat-num">{{ getTotalVideoCount() }}</span>
        <span class="stat-lbl">Videos</span>
      </div>
      <div class="stat-pill">
        <span class="stat-num">{{ getCategories().length }}</span>
        <span class="stat-lbl">Categories</span>
      </div>
      <div class="stat-pill">
        <span class="stat-num">{{ filteredCategories.length }}</span>
        <span class="stat-lbl">Showing</span>
      </div>
    </div>

    <!-- Filters -->
    <div class="filters-bar">
      <div class="filter-group">
        <label for="cat-filter">Category</label>
        <select id="cat-filter" [(ngModel)]="selectedCategory" (change)="onFilterChange()">
          <option value="all">All Categories</option>
          @for (cat of getCategories(); track cat) {
            <option [value]="cat">{{ cat }}</option>
          }
        </select>
      </div>

      <div class="filter-group filter-grow">
        <label for="search">Search</label>
        <input id="search" type="text" [(ngModel)]="searchText"
               (input)="onFilterChange()"
               placeholder="Search by title or category\u2026" />
      </div>
    </div>

    <!-- Results list -->
    <div class="results-list">
      @for (category of paginatedCategories; track category.label) {
        <div class="category-card">
          <div class="category-header">
            <span class="cat-label">{{ category.label }}</span>
            <span class="cat-count">{{ category.videos.length }} video{{ category.videos.length !== 1 ? 's' : '' }}</span>
          </div>

          <div class="videos-grid">
            @for (video of category.videos; track video.videoId) {
              <div class="video-item">
                <p class="video-title">{{ video.title }}</p>
                <p class="video-channel">{{ video.channelName }}</p>
                <p class="video-desc">{{ video.description | slice:0:120 }}\u2026</p>
              </div>
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
          <button (click)="goToPage(p)"
                  [class.active]="p === currentPage"
                  [disabled]="p === '...'">{{ p }}</button>
        }

        <button [disabled]="currentPage === totalPages" (click)="nextPage()">Next \u2192</button>
      </div>

      <p class="page-info">
        Page {{ currentPage }} of {{ totalPages }} &nbsp;\xB7&nbsp; {{ filteredCategories.length }} categories
      </p>
    }
  }

  @if (!loading && !data) {
    <div class="empty-state">
      <p>No results found. Process some channels first.</p>
      <button class="btn btn-primary btn-sm" (click)="loadData()">Retry</button>
    </div>
  }

</div>
`, styles: ["/* src/app/features/results/results.component.scss */\n.page-body {\n  padding: 28px 32px;\n}\n@media (max-width: 900px) {\n  .page-body {\n    padding: 20px 16px;\n  }\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.page-title {\n  font-family: var(--font-display);\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.4px;\n}\n.page-subtitle {\n  font-size: 12px;\n  color: var(--text-subtle);\n  margin-top: 3px;\n}\n.header-actions {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  flex-shrink: 0;\n}\n.stats-strip {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n}\n.stat-pill {\n  background: var(--surface-2);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 10px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 90px;\n}\n.stat-num {\n  font-family: var(--font-display);\n  font-size: 22px;\n  font-weight: 700;\n  background: var(--gradient-primary);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  line-height: 1.1;\n}\n.stat-lbl {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-subtle);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-top: 2px;\n}\n.filters-bar {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n  padding: 16px;\n  background: var(--surface-2);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n}\n.filter-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  min-width: 160px;\n}\n.filter-group.filter-grow {\n  flex: 1;\n}\n.filter-group label {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.filter-group select,\n.filter-group input[type=text] {\n  padding: 8px 12px;\n  border: 1.5px solid var(--border-strong);\n  border-radius: var(--radius-md);\n  font-family: var(--font-primary);\n  font-size: 13px;\n  color: var(--text);\n  background: var(--surface);\n  outline: none;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.filter-group select:focus,\n.filter-group input[type=text]:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(153, 15, 250, 0.12);\n}\n.results-list {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.category-card {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n  overflow: hidden;\n}\n.category-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 14px 20px;\n  background: var(--surface-2);\n  border-bottom: 1px solid var(--border);\n}\n.cat-label {\n  font-family: var(--font-display);\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--text);\n}\n.cat-count {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--primary);\n  background: rgba(153, 15, 250, 0.08);\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n.videos-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1px;\n  background: var(--border);\n}\n.video-item {\n  background: var(--surface);\n  padding: 14px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  transition: background 0.12s;\n}\n.video-item:hover {\n  background: var(--surface-2);\n}\n.video-title {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text);\n  line-height: 1.4;\n  margin: 0;\n}\n.video-channel {\n  font-size: 12px;\n  color: var(--primary);\n  font-weight: 500;\n  margin: 0;\n}\n.video-desc {\n  font-size: 12px;\n  color: var(--text-subtle);\n  line-height: 1.5;\n  margin: 0;\n}\n.pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  margin-bottom: 8px;\n}\n.pagination button {\n  padding: 6px 12px;\n  border: 1.5px solid var(--border-strong);\n  background: var(--surface);\n  border-radius: var(--radius-md);\n  font-family: var(--font-primary);\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.15s;\n  min-width: 36px;\n}\n.pagination button:hover:not(:disabled) {\n  background: var(--surface-2);\n  color: var(--primary);\n  border-color: var(--primary);\n}\n.pagination button:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pagination button.active {\n  background: var(--gradient-primary);\n  color: white;\n  border-color: transparent;\n  font-weight: 600;\n}\n.page-info {\n  text-align: center;\n  font-size: 12px;\n  color: var(--text-subtle);\n  margin-bottom: 20px;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n  gap: 14px;\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.spinner-lg {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state {\n  text-align: center;\n  padding: 60px 20px;\n  color: var(--text-muted);\n  font-size: 14px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n/*# sourceMappingURL=results.component.css.map */\n"] }]
  }], () => [{ type: VideoService }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResultsComponent, { className: "ResultsComponent", filePath: "app/features/results/results.component.ts", lineNumber: 16 });
})();
export {
  ResultsComponent
};
//# sourceMappingURL=chunk-6YSWATNP.js.map
