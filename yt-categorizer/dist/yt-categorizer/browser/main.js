import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-K56U47CP.js";
import {
  CommonModule,
  Component,
  provideHttpClient,
  setClassMetadata,
  withInterceptorsFromDi,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RBZGX75M.js";

// src/app/layout/sidebar/sidebar.component.ts
var _c0 = (a0) => ({ exact: a0 });
var _forTrack0 = ($index, $item) => $item.title;
var _forTrack1 = ($index, $item) => $item.route;
function SidebarComponent_For_12_For_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.badge);
  }
}
function SidebarComponent_For_12_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 14);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 15);
    \u0275\u0275element(2, "path");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275conditionalCreate(4, SidebarComponent_For_12_For_3_Conditional_4_Template, 2, 1, "span", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.route)("routerLinkActiveOptions", \u0275\u0275pureFunction1(5, _c0, item_r1.route === "/"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("d", item_r1.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r1.badge ? 4 : -1);
  }
}
function SidebarComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(2, SidebarComponent_For_12_For_3_Template, 5, 7, "a", 14, _forTrack1);
  }
  if (rf & 2) {
    const section_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(section_r2.title);
    \u0275\u0275advance();
    \u0275\u0275repeater(section_r2.items);
  }
}
var SidebarComponent = class _SidebarComponent {
  constructor() {
    this.navSections = [
      {
        title: "Main",
        items: [
          {
            label: "Dashboard",
            route: "/",
            icon: "M3 3h7v7H3zm11 0h7v7h-7zM3 14h7v7H3zm11 0h7v7h-7z"
          },
          {
            label: "Results",
            route: "/results",
            icon: "M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
          },
          {
            label: "Videos",
            route: "/videos",
            icon: "M23 7l-7 5 7 5V7zM1 5h15a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H1a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"
          },
          {
            label: "Channels",
            route: "/channels",
            icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm7.73-1a4 4 0 0 1 0 7.75M23 21v-2a4 4 0 0 0-3-3.87"
          }
        ]
      },
      {
        title: "Analytics",
        items: [
          {
            label: "Reports",
            route: "/reports",
            icon: "M18 20V10M12 20V4M6 20v-6"
          }
        ]
      }
    ];
  }
  static {
    this.\u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SidebarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], decls: 22, vars: 0, consts: [[1, "sidebar"], [1, "sidebar-brand"], ["routerLink", "/", 1, "brand-mark"], [1, "brand-icon"], ["viewBox", "0 0 24 24"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"], [1, "brand-name"], [1, "sidebar-nav"], [1, "sidebar-footer"], [1, "user-block"], [1, "avatar"], [1, "user-name"], [1, "user-plan"], [1, "nav-section-label"], ["routerLinkActive", "active", 1, "nav-item", 3, "routerLink", "routerLinkActiveOptions"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "nav-icon"], [1, "nav-badge"]], template: function SidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "aside", 0)(1, "div", 1)(2, "a", 2)(3, "div", 3);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(4, "svg", 4);
        \u0275\u0275element(5, "path", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(6, "div", 6)(7, "span");
        \u0275\u0275text(8, "YT");
        \u0275\u0275elementEnd();
        \u0275\u0275text(9, " Categorizer");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "nav", 7);
        \u0275\u0275repeaterCreate(11, SidebarComponent_For_12_Template, 4, 1, null, null, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 8)(14, "div", 9)(15, "div", 10);
        \u0275\u0275text(16, "AB");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div")(18, "div", 11);
        \u0275\u0275text(19, "Abdelrhman");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 12);
        \u0275\u0275text(21, "Free Plan");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275repeater(ctx.navSections);
      }
    }, dependencies: [CommonModule, RouterModule, RouterLink, RouterLinkActive], styles: ["\n.sidebar[_ngcontent-%COMP%] {\n  width: 240px;\n  background: var(--surface);\n  border-right: 1px solid var(--border);\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  flex-shrink: 0;\n  box-shadow: 2px 0 12px rgba(153, 15, 250, 0.06);\n}\n.sidebar-brand[_ngcontent-%COMP%] {\n  padding: 24px 20px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n}\n.brand-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background: var(--gradient-primary);\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.brand-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  fill: white;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.3px;\n}\n.brand-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  padding: 12px 10px;\n  flex: 1;\n}\n.nav-section-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--text-subtle);\n  padding: 8px 10px 4px;\n}\n.nav-section-label[_ngcontent-%COMP%]    + .nav-section-label[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 10px;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-muted);\n  font-size: 13px;\n  font-weight: 500;\n  transition: all 0.15s ease;\n  text-decoration: none;\n  margin-bottom: 2px;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n  color: var(--primary);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(153, 15, 250, 0.1) 0%,\n      rgba(230, 0, 118, 0.08) 100%);\n  color: var(--primary);\n}\n.nav-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n.nav-badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: var(--gradient-primary);\n  color: white;\n  font-size: 10px;\n  font-weight: 600;\n  padding: 2px 7px;\n  border-radius: 20px;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 16px 10px;\n  border-top: 1px solid var(--border);\n}\n.user-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 10px;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n}\n.user-block[_ngcontent-%COMP%]:hover {\n  background: var(--surface-2);\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: var(--gradient-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  color: white;\n  flex-shrink: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text);\n}\n.user-plan[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-subtle);\n}\n/*# sourceMappingURL=sidebar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarComponent, [{
    type: Component,
    args: [{ selector: "app-sidebar", standalone: true, imports: [CommonModule, RouterModule, RouterLinkActive], template: `<aside class="sidebar">

  <!-- Brand -->
  <div class="sidebar-brand">
    <a class="brand-mark" routerLink="/">
      <div class="brand-icon">
        <svg viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
        </svg>
      </div>
      <div class="brand-name"><span>YT</span> Categorizer</div>
    </a>
  </div>

  <!-- Nav -->
  <nav class="sidebar-nav">
    @for (section of navSections; track section.title) {
      <div class="nav-section-label">{{ section.title }}</div>
      @for (item of section.items; track item.route) {
        <a
          class="nav-item"
          [routerLink]="item.route"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: item.route === '/' }"
        >
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round">
            <path [attr.d]="item.icon"/>
          </svg>
          {{ item.label }}
          @if (item.badge) {
            <span class="nav-badge">{{ item.badge }}</span>
          }
        </a>
      }
    }
  </nav>

  <!-- User footer -->
  <div class="sidebar-footer">
    <div class="user-block">
      <div class="avatar">AB</div>
      <div>
        <div class="user-name">Abdelrhman</div>
        <div class="user-plan">Free Plan</div>
      </div>
    </div>
  </div>

</aside>
`, styles: ["/* src/app/layout/sidebar/sidebar.component.scss */\n.sidebar {\n  width: 240px;\n  background: var(--surface);\n  border-right: 1px solid var(--border);\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  flex-shrink: 0;\n  box-shadow: 2px 0 12px rgba(153, 15, 250, 0.06);\n}\n.sidebar-brand {\n  padding: 24px 20px 20px;\n  border-bottom: 1px solid var(--border);\n}\n.brand-mark {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n}\n.brand-icon {\n  width: 36px;\n  height: 36px;\n  background: var(--gradient-primary);\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.brand-icon svg {\n  width: 18px;\n  height: 18px;\n  fill: white;\n}\n.brand-name {\n  font-family: var(--font-display);\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.3px;\n}\n.brand-name span {\n  background: var(--gradient-primary);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.sidebar-nav {\n  padding: 12px 10px;\n  flex: 1;\n}\n.nav-section-label {\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--text-subtle);\n  padding: 8px 10px 4px;\n}\n.nav-section-label + .nav-section-label {\n  margin-top: 12px;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 10px;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-muted);\n  font-size: 13px;\n  font-weight: 500;\n  transition: all 0.15s ease;\n  text-decoration: none;\n  margin-bottom: 2px;\n}\n.nav-item:hover {\n  background: var(--surface-2);\n  color: var(--primary);\n}\n.nav-item.active {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(153, 15, 250, 0.1) 0%,\n      rgba(230, 0, 118, 0.08) 100%);\n  color: var(--primary);\n}\n.nav-icon {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n.nav-badge {\n  margin-left: auto;\n  background: var(--gradient-primary);\n  color: white;\n  font-size: 10px;\n  font-weight: 600;\n  padding: 2px 7px;\n  border-radius: 20px;\n}\n.sidebar-footer {\n  padding: 16px 10px;\n  border-top: 1px solid var(--border);\n}\n.user-block {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 10px;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n}\n.user-block:hover {\n  background: var(--surface-2);\n}\n.avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: var(--gradient-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  color: white;\n  flex-shrink: 0;\n}\n.user-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text);\n}\n.user-plan {\n  font-size: 11px;\n  color: var(--text-subtle);\n}\n/*# sourceMappingURL=sidebar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "app/layout/sidebar/sidebar.component.ts", lineNumber: 24 });
})();

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  static {
    this.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "app-shell"], [1, "main"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-sidebar");
        \u0275\u0275elementStart(2, "div", 1);
        \u0275\u0275element(3, "router-outlet");
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [RouterOutlet, SidebarComponent], styles: ["\n.app-shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n.main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [RouterOutlet, SidebarComponent], template: `
    <div class="app-shell">
      <app-sidebar />
      <div class="main">
        <router-outlet />
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;95647f3dee92f1264f72555554e81d7d00224e26d71a0da60eb3d90eb639b3ed;F:/Amr/FEHU - CSE/4th CSE/1st Term/Machine Learning/YouTubeCategorizer/yt-categorizer/src/app/app.component.ts */\n.app-shell {\n  display: flex;\n  min-height: 100vh;\n}\n.main {\n  flex: 1;\n  min-width: 0;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "app/app.component.ts", lineNumber: 22 });
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-ZLIR4CHN.js").then((m) => m.DashboardComponent)
  },
  {
    path: "results",
    loadComponent: () => import("./chunk-6YSWATNP.js").then((m) => m.ResultsComponent)
  },
  {
    path: "videos",
    loadComponent: () => import("./chunk-J7EFBIMH.js").then((m) => m.VideosComponent)
  },
  {
    path: "channels",
    loadComponent: () => import("./chunk-J4WC4BUU.js").then((m) => m.ChannelsComponent)
  },
  {
    path: "reports",
    loadComponent: () => import("./chunk-YYFWA7GM.js").then((m) => m.ReportsComponent)
  },
  { path: "**", redirectTo: "" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi())
  ]
};

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
