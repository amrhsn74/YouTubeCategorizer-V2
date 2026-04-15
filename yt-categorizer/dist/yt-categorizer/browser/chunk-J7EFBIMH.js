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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RBZGX75M.js";

// src/app/features/videos/videos.component.ts
var _c0 = () => [10, 15, 20, 50];
var _forTrack0 = ($index, $item) => $item.videoId;
function VideosComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading videos\u2026");
    \u0275\u0275elementEnd()();
  }
}
function VideosComponent_Conditional_10_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
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
function VideosComponent_Conditional_10_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ch_r4 = ctx.$implicit;
    \u0275\u0275property("value", ch_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ch_r4);
  }
}
function VideosComponent_Conditional_10_For_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function VideosComponent_Conditional_10_For_26_Template_button_click_0_listener() {
      const size_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changePageSize(size_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.pageSize === size_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(size_r6);
  }
}
function VideosComponent_Conditional_10_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 26)(8, "span", 31);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 32);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "slice");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const video_r7 = ctx.$implicit;
    const \u0275$index_100_r8 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r1.currentPage - 1) * ctx_r1.pageSize + \u0275$index_100_r8 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(video_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(video_r7.channelName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(video_r7.categoryLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind3(12, 5, video_r7.description, 0, 100), "\u2026");
  }
}
function VideosComponent_Conditional_10_Conditional_45_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function VideosComponent_Conditional_10_Conditional_45_For_4_Template_button_click_0_listener() {
      const p_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r11));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", p_r11 === ctx_r1.currentPage);
    \u0275\u0275property("disabled", p_r11 === "...");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r11);
  }
}
function VideosComponent_Conditional_10_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "button", 34);
    \u0275\u0275listener("click", function VideosComponent_Conditional_10_Conditional_45_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.prevPage());
    });
    \u0275\u0275text(2, "\u2190 Prev");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, VideosComponent_Conditional_10_Conditional_45_For_4_Template, 2, 4, "button", 35, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(5, "button", 34);
    \u0275\u0275listener("click", function VideosComponent_Conditional_10_Conditional_45_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275text(6, "Next \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 36);
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
    \u0275\u0275textInterpolate4(" Showing ", ctx_r1.paginatedVideos.length, " of ", ctx_r1.filteredVideos.length, " videos \xA0\xB7\xA0 Page ", ctx_r1.currentPage, " of ", ctx_r1.totalPages, " ");
  }
}
function VideosComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "label", 10);
    \u0275\u0275text(3, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 11);
    \u0275\u0275twoWayListener("ngModelChange", function VideosComponent_Conditional_10_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedCategory, $event) || (ctx_r1.selectedCategory = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function VideosComponent_Conditional_10_Template_select_change_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFilterChange());
    });
    \u0275\u0275elementStart(5, "option", 12);
    \u0275\u0275text(6, "All Categories");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(7, VideosComponent_Conditional_10_For_8_Template, 2, 2, "option", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 9)(10, "label", 14);
    \u0275\u0275text(11, "Channel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 15);
    \u0275\u0275twoWayListener("ngModelChange", function VideosComponent_Conditional_10_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedChannel, $event) || (ctx_r1.selectedChannel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function VideosComponent_Conditional_10_Template_select_change_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFilterChange());
    });
    \u0275\u0275elementStart(13, "option", 12);
    \u0275\u0275text(14, "All Channels");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(15, VideosComponent_Conditional_10_For_16_Template, 2, 2, "option", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 16)(18, "label", 17);
    \u0275\u0275text(19, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function VideosComponent_Conditional_10_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchText, $event) || (ctx_r1.searchText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function VideosComponent_Conditional_10_Template_input_input_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFilterChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 9)(22, "label");
    \u0275\u0275text(23, "Page size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 19);
    \u0275\u0275repeaterCreate(25, VideosComponent_Conditional_10_For_26_Template, 2, 3, "button", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 21)(28, "div", 22)(29, "table")(30, "thead")(31, "tr")(32, "th", 23);
    \u0275\u0275text(33, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th", 24);
    \u0275\u0275text(35, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th", 25);
    \u0275\u0275text(37, "Channel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th", 26);
    \u0275\u0275text(39, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th", 27);
    \u0275\u0275text(41, "Description");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "tbody");
    \u0275\u0275repeaterCreate(43, VideosComponent_Conditional_10_For_44_Template, 13, 9, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(45, VideosComponent_Conditional_10_Conditional_45_Template, 9, 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedCategory);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.categories);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedChannel);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.channels);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchText);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r1.paginatedVideos);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.totalPages > 1 ? 45 : -1);
  }
}
function VideosComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "p");
    \u0275\u0275text(2, "No videos found. Start by processing YouTube channels.");
    \u0275\u0275elementEnd()();
  }
}
var VideosComponent = class _VideosComponent {
  constructor(videoService, paginationService) {
    this.videoService = videoService;
    this.paginationService = paginationService;
    this.allVideos = [];
    this.loading = true;
    this.error = false;
    this.pageSize = 15;
    this.currentPage = 1;
    this.totalPages = 0;
    this.pageNumbers = [];
    this.paginatedVideos = [];
    this.selectedCategory = "all";
    this.selectedChannel = "all";
    this.searchText = "";
    this.filteredVideos = [];
    this.categories = [];
    this.channels = [];
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
        this.extractAllVideos(data);
        this.extractUnique();
        this.filteredVideos = [...this.allVideos];
        this.currentPage = 1;
        this.updatePagination();
      },
      error: () => {
        this.error = true;
      }
    });
  }
  extractAllVideos(data) {
    this.allVideos = [];
    (data?.categories ?? []).forEach((cat) => {
      this.allVideos.push(...cat.videos ?? []);
    });
  }
  extractUnique() {
    this.categories = Array.from(new Set(this.allVideos.map((v) => v.categoryLabel ?? "")));
    this.channels = Array.from(new Set(this.allVideos.map((v) => v.channelName ?? "")));
  }
  updatePagination() {
    this.totalPages = this.paginationService.getTotalPages(this.filteredVideos.length, this.pageSize);
    this.currentPage = Math.min(this.currentPage, this.totalPages || 1);
    this.pageNumbers = this.paginationService.getPageNumbers(this.currentPage, this.totalPages);
    this.paginatedVideos = this.paginationService.paginate(this.filteredVideos, this.currentPage, this.pageSize);
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
    const q = this.searchText.toLowerCase();
    this.filteredVideos = this.allVideos.filter((v) => {
      const matchesCat = this.selectedCategory === "all" || (v.categoryLabel ?? "") === this.selectedCategory;
      const matchesCh = this.selectedChannel === "all" || (v.channelName ?? "") === this.selectedChannel;
      const matchesSearch = !q || (v.title ?? "").toLowerCase().includes(q) || (v.description ?? "").toLowerCase().includes(q);
      return matchesCat && matchesCh && matchesSearch;
    });
    this.updatePagination();
  }
  changePageSize(newSize) {
    this.pageSize = newSize;
    this.currentPage = 1;
    this.updatePagination();
  }
  static {
    this.\u0275fac = function VideosComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VideosComponent)(\u0275\u0275directiveInject(VideoService), \u0275\u0275directiveInject(PaginationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VideosComponent, selectors: [["app-videos"]], decls: 12, vars: 4, consts: [[1, "page-body"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "total-badge"], [1, "loading-state"], [1, "empty-state"], [1, "spinner-lg"], [1, "filters-bar"], [1, "filter-group"], ["for", "cat"], ["id", "cat", 3, "ngModelChange", "change", "ngModel"], ["value", "all"], [3, "value"], ["for", "ch"], ["id", "ch", 3, "ngModelChange", "change", "ngModel"], [1, "filter-group", "filter-grow"], ["for", "search"], ["id", "search", "type", "text", "placeholder", "Search videos\u2026", 3, "ngModelChange", "input", "ngModel"], [1, "size-buttons"], [3, "active"], [1, "table-card"], [1, "table-wrap"], [1, "col-num"], [1, "col-title"], [1, "col-channel"], [1, "col-cat"], [1, "col-desc"], [3, "click"], [1, "col-num", "num-cell"], [1, "col-channel", "ch-cell"], [1, "cat-badge"], [1, "col-desc", "desc-cell"], [1, "pagination"], [3, "click", "disabled"], [3, "active", "disabled"], [1, "page-info"]], template: function VideosComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "All Videos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "All videos from the database");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "span", 4);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(9, VideosComponent_Conditional_9_Template, 4, 0, "div", 5);
        \u0275\u0275conditionalCreate(10, VideosComponent_Conditional_10_Template, 46, 5);
        \u0275\u0275conditionalCreate(11, VideosComponent_Conditional_11_Template, 3, 0, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("", ctx.allVideos.length, " total");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading && ctx.allVideos.length > 0 ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading && ctx.allVideos.length === 0 ? 11 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, SlicePipe], styles: ["\n.page-body[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n}\n@media (max-width: 900px) {\n  .page-body[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.4px;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-subtle);\n  margin-top: 3px;\n}\n.total-badge[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--primary);\n  background: rgba(153, 15, 250, 0.08);\n  border: 1px solid var(--border);\n  padding: 4px 12px;\n  border-radius: 20px;\n  align-self: flex-start;\n  white-space: nowrap;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n  padding: 16px;\n  background: var(--surface-2);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n  align-items: flex-end;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  min-width: 140px;\n}\n.filter-group.filter-grow[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.filter-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1.5px solid var(--border-strong);\n  border-radius: var(--radius-md);\n  font-family: var(--font-primary);\n  font-size: 13px;\n  color: var(--text);\n  background: var(--surface);\n  outline: none;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.filter-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(153, 15, 250, 0.12);\n}\n.size-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.size-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 7px 10px;\n  border: 1.5px solid var(--border-strong);\n  background: var(--surface);\n  border-radius: var(--radius-md);\n  font-family: var(--font-primary);\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.size-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n  color: var(--primary);\n  border-color: var(--primary);\n}\n.size-buttons[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: white;\n  border-color: transparent;\n  font-weight: 600;\n}\n.table-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n  overflow: hidden;\n  margin-bottom: 16px;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--surface-2);\n  border-bottom: 1px solid var(--border);\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  white-space: nowrap;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border);\n  transition: background 0.1s;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 14px;\n  font-size: 13px;\n}\n.col-num[_ngcontent-%COMP%] {\n  width: 48px;\n}\n.col-title[_ngcontent-%COMP%] {\n  width: 28%;\n}\n.col-channel[_ngcontent-%COMP%] {\n  width: 18%;\n}\n.col-cat[_ngcontent-%COMP%] {\n  width: 14%;\n}\n.col-desc[_ngcontent-%COMP%] {\n  width: auto;\n}\n.num-cell[_ngcontent-%COMP%] {\n  color: var(--text-subtle);\n  font-weight: 600;\n  font-family: var(--font-mono);\n}\n.ch-cell[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.desc-cell[_ngcontent-%COMP%] {\n  color: var(--text-subtle);\n  font-size: 12px;\n}\n.cat-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: rgba(153, 15, 250, 0.09);\n  color: var(--primary);\n  border: 1px solid rgba(153, 15, 250, 0.2);\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  margin-bottom: 8px;\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border: 1.5px solid var(--border-strong);\n  background: var(--surface);\n  border-radius: var(--radius-md);\n  font-family: var(--font-primary);\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.15s;\n  min-width: 36px;\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--surface-2);\n  color: var(--primary);\n  border-color: var(--primary);\n}\n.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pagination[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: white;\n  border-color: transparent;\n  font-weight: 600;\n}\n.page-info[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 12px;\n  color: var(--text-subtle);\n  margin-bottom: 20px;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n  gap: 14px;\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.spinner-lg[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n/*# sourceMappingURL=videos.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VideosComponent, [{
    type: Component,
    args: [{ selector: "app-videos", standalone: true, imports: [CommonModule, SlicePipe, FormsModule], template: `<div class="page-body">

  <div class="page-header">
    <div>
      <h1 class="page-title">All Videos</h1>
      <p class="page-subtitle">All videos from the database</p>
    </div>
    <span class="total-badge">{{ allVideos.length }} total</span>
  </div>

  @if (loading) {
    <div class="loading-state">
      <div class="spinner-lg"></div>
      <p>Loading videos\u2026</p>
    </div>
  }

  @if (!loading && allVideos.length > 0) {
    <!-- Filters -->
    <div class="filters-bar">
      <div class="filter-group">
        <label for="cat">Category</label>
        <select id="cat" [(ngModel)]="selectedCategory" (change)="onFilterChange()">
          <option value="all">All Categories</option>
          @for (cat of categories; track cat) {
            <option [value]="cat">{{ cat }}</option>
          }
        </select>
      </div>

      <div class="filter-group">
        <label for="ch">Channel</label>
        <select id="ch" [(ngModel)]="selectedChannel" (change)="onFilterChange()">
          <option value="all">All Channels</option>
          @for (ch of channels; track ch) {
            <option [value]="ch">{{ ch }}</option>
          }
        </select>
      </div>

      <div class="filter-group filter-grow">
        <label for="search">Search</label>
        <input id="search" type="text" [(ngModel)]="searchText"
               (input)="onFilterChange()" placeholder="Search videos\u2026" />
      </div>

      <div class="filter-group">
        <label>Page size</label>
        <div class="size-buttons">
          @for (size of [10, 15, 20, 50]; track size) {
            <button [class.active]="pageSize === size" (click)="changePageSize(size)">{{ size }}</button>
          }
        </div>
      </div>
    </div>

    <!-- Table -->
    <div class="table-card">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th class="col-num">#</th>
              <th class="col-title">Title</th>
              <th class="col-channel">Channel</th>
              <th class="col-cat">Category</th>
              <th class="col-desc">Description</th>
            </tr>
          </thead>
          <tbody>
            @for (video of paginatedVideos; track video.videoId; let i = $index) {
              <tr>
                <td class="col-num num-cell">{{ (currentPage - 1) * pageSize + i + 1 }}</td>
                <td class="col-title">{{ video.title }}</td>
                <td class="col-channel ch-cell">{{ video.channelName }}</td>
                <td class="col-cat">
                  <span class="cat-badge">{{ video.categoryLabel }}</span>
                </td>
                <td class="col-desc desc-cell">{{ video.description | slice:0:100 }}\u2026</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
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
        Showing {{ paginatedVideos.length }} of {{ filteredVideos.length }} videos &nbsp;\xB7&nbsp;
        Page {{ currentPage }} of {{ totalPages }}
      </p>
    }
  }

  @if (!loading && allVideos.length === 0) {
    <div class="empty-state">
      <p>No videos found. Start by processing YouTube channels.</p>
    </div>
  }

</div>
`, styles: ["/* src/app/features/videos/videos.component.scss */\n.page-body {\n  padding: 28px 32px;\n}\n@media (max-width: 900px) {\n  .page-body {\n    padding: 20px 16px;\n  }\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.page-title {\n  font-family: var(--font-display);\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.4px;\n}\n.page-subtitle {\n  font-size: 12px;\n  color: var(--text-subtle);\n  margin-top: 3px;\n}\n.total-badge {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--primary);\n  background: rgba(153, 15, 250, 0.08);\n  border: 1px solid var(--border);\n  padding: 4px 12px;\n  border-radius: 20px;\n  align-self: flex-start;\n  white-space: nowrap;\n}\n.filters-bar {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 20px;\n  padding: 16px;\n  background: var(--surface-2);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n  align-items: flex-end;\n}\n.filter-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  min-width: 140px;\n}\n.filter-group.filter-grow {\n  flex: 1;\n}\n.filter-group label {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.filter-group select,\n.filter-group input[type=text] {\n  padding: 8px 12px;\n  border: 1.5px solid var(--border-strong);\n  border-radius: var(--radius-md);\n  font-family: var(--font-primary);\n  font-size: 13px;\n  color: var(--text);\n  background: var(--surface);\n  outline: none;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.filter-group select:focus,\n.filter-group input[type=text]:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(153, 15, 250, 0.12);\n}\n.size-buttons {\n  display: flex;\n  gap: 4px;\n}\n.size-buttons button {\n  flex: 1;\n  padding: 7px 10px;\n  border: 1.5px solid var(--border-strong);\n  background: var(--surface);\n  border-radius: var(--radius-md);\n  font-family: var(--font-primary);\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.size-buttons button:hover {\n  background: var(--surface-2);\n  color: var(--primary);\n  border-color: var(--primary);\n}\n.size-buttons button.active {\n  background: var(--gradient-primary);\n  color: white;\n  border-color: transparent;\n  font-weight: 600;\n}\n.table-card {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n  overflow: hidden;\n  margin-bottom: 16px;\n}\n.table-wrap {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable thead {\n  background: var(--surface-2);\n  border-bottom: 1px solid var(--border);\n}\ntable thead th {\n  padding: 12px 14px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  white-space: nowrap;\n}\ntable tbody tr {\n  border-bottom: 1px solid var(--border);\n  transition: background 0.1s;\n}\ntable tbody tr:last-child {\n  border-bottom: none;\n}\ntable tbody tr:hover {\n  background: var(--surface-2);\n}\ntable tbody tr td {\n  padding: 11px 14px;\n  font-size: 13px;\n}\n.col-num {\n  width: 48px;\n}\n.col-title {\n  width: 28%;\n}\n.col-channel {\n  width: 18%;\n}\n.col-cat {\n  width: 14%;\n}\n.col-desc {\n  width: auto;\n}\n.num-cell {\n  color: var(--text-subtle);\n  font-weight: 600;\n  font-family: var(--font-mono);\n}\n.ch-cell {\n  color: var(--text-muted);\n}\n.desc-cell {\n  color: var(--text-subtle);\n  font-size: 12px;\n}\n.cat-badge {\n  display: inline-block;\n  background: rgba(153, 15, 250, 0.09);\n  color: var(--primary);\n  border: 1px solid rgba(153, 15, 250, 0.2);\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  margin-bottom: 8px;\n}\n.pagination button {\n  padding: 6px 12px;\n  border: 1.5px solid var(--border-strong);\n  background: var(--surface);\n  border-radius: var(--radius-md);\n  font-family: var(--font-primary);\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.15s;\n  min-width: 36px;\n}\n.pagination button:hover:not(:disabled) {\n  background: var(--surface-2);\n  color: var(--primary);\n  border-color: var(--primary);\n}\n.pagination button:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pagination button.active {\n  background: var(--gradient-primary);\n  color: white;\n  border-color: transparent;\n  font-weight: 600;\n}\n.page-info {\n  text-align: center;\n  font-size: 12px;\n  color: var(--text-subtle);\n  margin-bottom: 20px;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n  gap: 14px;\n  color: var(--text-muted);\n  font-size: 13px;\n}\n.spinner-lg {\n  width: 32px;\n  height: 32px;\n  border: 3px solid var(--border);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state {\n  text-align: center;\n  padding: 60px 20px;\n  color: var(--text-muted);\n  font-size: 14px;\n}\n/*# sourceMappingURL=videos.component.css.map */\n"] }]
  }], () => [{ type: VideoService }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VideosComponent, { className: "VideosComponent", filePath: "app/features/videos/videos.component.ts", lineNumber: 16 });
})();
export {
  VideosComponent
};
//# sourceMappingURL=chunk-J7EFBIMH.js.map
