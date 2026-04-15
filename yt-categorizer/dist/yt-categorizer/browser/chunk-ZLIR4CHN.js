import {
  Router
} from "./chunk-K56U47CP.js";
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
  EventEmitter,
  NgClass,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RBZGX75M.js";

// src/app/features/dashboard/components/channel-input/channel-input.component.ts
function ChannelInputComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 23);
    \u0275\u0275text(1, " Processing\u2026 ");
  }
}
function ChannelInputComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 24);
    \u0275\u0275element(1, "circle", 25)(2, "polygon", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Start Processing ");
  }
}
function ChannelInputComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "div", 27);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", "status-" + ctx_r0.status.type);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.status.text);
  }
}
var ChannelInputComponent = class _ChannelInputComponent {
  constructor(videoService) {
    this.videoService = videoService;
    this.jobQueued = new EventEmitter();
    this.channelUrl1 = "";
    this.channelUrl2 = "";
    this.channelUrl3 = "";
    this.isLoading = false;
    this.status = null;
  }
  submit() {
    if (!this.channelUrl1 && !this.channelUrl2 && !this.channelUrl3) {
      this.status = { type: "error", text: "Please enter at least one YouTube channel URL." };
      return;
    }
    const payload = {
      channelUrl1: this.channelUrl1.trim(),
      channelUrl2: this.channelUrl2.trim(),
      channelUrl3: this.channelUrl3.trim()
    };
    this.isLoading = true;
    this.status = { type: "info", text: "Sending channels to AI categorization engine\u2026" };
    this.videoService.processChannels(payload).subscribe({
      next: () => {
        this.isLoading = false;
        this.status = {
          type: "success",
          text: 'Job queued! Allow 1\u20132 minutes for AI processing, then click "Load Results".'
        };
        this.jobQueued.emit();
      },
      error: (err) => {
        this.isLoading = false;
        this.status = {
          type: "error",
          text: "Error: " + (err?.message ?? "Unknown server error")
        };
      }
    });
  }
  static {
    this.\u0275fac = function ChannelInputComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChannelInputComponent)(\u0275\u0275directiveInject(VideoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChannelInputComponent, selectors: [["app-channel-input"]], outputs: { jobQueued: "jobQueued" }, decls: 52, vars: 6, consts: [[1, "card"], [1, "card-header"], [1, "card-header-left"], [1, "step-badge"], [1, "card-title"], [1, "card-subtitle"], [1, "form-group"], ["for", "url1", 1, "form-label"], [1, "input-wrap"], [1, "input-prefix"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.96-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"], ["points", "9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"], ["id", "url1", "type", "url", "placeholder", "https://youtube.com/@channel1", 3, "ngModelChange", "ngModel"], [1, "input-tag"], ["for", "url2", 1, "form-label"], [1, "optional"], ["id", "url2", "type", "url", "placeholder", "https://youtube.com/@channel2", 3, "ngModelChange", "ngModel"], ["for", "url3", 1, "form-label"], ["id", "url3", "type", "url", "placeholder", "https://youtube.com/@channel3", 3, "ngModelChange", "ngModel"], [1, "submit-row"], [1, "btn", "btn-primary", "submit-btn", 3, "click", "disabled"], [1, "status-msg", 3, "ngClass"], [1, "spinner"], ["width", "15", "height", "15", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "12", "cy", "12", "r", "10"], ["points", "10 8 16 12 10 16 10 8"], [1, "status-dot"]], template: function ChannelInputComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275text(4, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "div", 4);
        \u0275\u0275text(7, "Add YouTube Channels");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 5);
        \u0275\u0275text(9, "Enter up to 3 channel URLs to process");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "div", 6)(11, "label", 7);
        \u0275\u0275text(12, "Channel URL 1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 8)(14, "span", 9);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(15, "svg", 10);
        \u0275\u0275element(16, "path", 11)(17, "polygon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(18, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function ChannelInputComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.channelUrl1, $event) || (ctx.channelUrl1 = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 14);
        \u0275\u0275text(20, "CH1");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 6)(22, "label", 15);
        \u0275\u0275text(23, " Channel URL 2 ");
        \u0275\u0275elementStart(24, "span", 16);
        \u0275\u0275text(25, "(optional)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 8)(27, "span", 9);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(28, "svg", 10);
        \u0275\u0275element(29, "path", 11)(30, "polygon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(31, "input", 17);
        \u0275\u0275twoWayListener("ngModelChange", function ChannelInputComponent_Template_input_ngModelChange_31_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.channelUrl2, $event) || (ctx.channelUrl2 = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "span", 14);
        \u0275\u0275text(33, "CH2");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "div", 6)(35, "label", 18);
        \u0275\u0275text(36, " Channel URL 3 ");
        \u0275\u0275elementStart(37, "span", 16);
        \u0275\u0275text(38, "(optional)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 8)(40, "span", 9);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(41, "svg", 10);
        \u0275\u0275element(42, "path", 11)(43, "polygon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(44, "input", 19);
        \u0275\u0275twoWayListener("ngModelChange", function ChannelInputComponent_Template_input_ngModelChange_44_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.channelUrl3, $event) || (ctx.channelUrl3 = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "span", 14);
        \u0275\u0275text(46, "CH3");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(47, "div", 20)(48, "button", 21);
        \u0275\u0275listener("click", function ChannelInputComponent_Template_button_click_48_listener() {
          return ctx.submit();
        });
        \u0275\u0275conditionalCreate(49, ChannelInputComponent_Conditional_49_Template, 2, 0)(50, ChannelInputComponent_Conditional_50_Template, 4, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(51, ChannelInputComponent_Conditional_51_Template, 4, 2, "div", 22);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(18);
        \u0275\u0275twoWayProperty("ngModel", ctx.channelUrl1);
        \u0275\u0275advance(13);
        \u0275\u0275twoWayProperty("ngModel", ctx.channelUrl2);
        \u0275\u0275advance(13);
        \u0275\u0275twoWayProperty("ngModel", ctx.channelUrl3);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isLoading ? 49 : 50);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.status ? 51 : -1);
      }
    }, dependencies: [CommonModule, NgClass, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n.card[_ngcontent-%COMP%] {\n  background: var(--gradient-card);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-xl);\n  padding: 24px;\n  box-shadow: var(--shadow-sm);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.card-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.step-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 26px;\n  background: var(--gradient-primary);\n  color: white;\n  font-size: 12px;\n  font-weight: 700;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.2px;\n}\n.card-subtitle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-top: 3px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 0;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n  margin-bottom: 6px;\n}\n.optional[_ngcontent-%COMP%] {\n  color: var(--text-subtle);\n  font-weight: 400;\n  text-transform: none;\n  letter-spacing: 0;\n}\n.input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-prefix[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-subtle);\n  font-size: 13px;\n  pointer-events: none;\n  display: flex;\n  align-items: center;\n}\ninput[type=url][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 60px 10px 36px;\n  border: 1.5px solid var(--border-strong);\n  border-radius: var(--radius-md);\n  font-family: var(--font-primary);\n  font-size: 13px;\n  color: var(--text);\n  background: var(--surface);\n  transition: border-color 0.15s, box-shadow 0.15s;\n  outline: none;\n}\ninput[type=url][_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(153, 15, 250, 0.12);\n}\ninput[type=url][_ngcontent-%COMP%]::placeholder {\n  color: var(--text-subtle);\n  font-style: italic;\n}\n.input-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--text-subtle);\n  background: var(--surface-3);\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-family: var(--font-mono);\n}\n.submit-row[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  padding: 12px 20px;\n  font-size: 14px;\n}\n.status-msg[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 14px;\n  padding: 12px 16px;\n  border-radius: var(--radius-md);\n  font-size: 13px;\n  font-weight: 500;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  animation: _ngcontent-%COMP%_pulse 1.5s ease-in-out infinite;\n}\n.status-info[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(153, 15, 250, 0.07) 0%,\n      rgba(230, 0, 118, 0.05) 100%);\n  color: var(--primary-dark);\n  border: 1px solid rgba(153, 15, 250, 0.2);\n}\n.status-info[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: var(--primary);\n}\n.status-success[_ngcontent-%COMP%] {\n  background: #ECFDF5;\n  color: #065F46;\n  border: 1px solid #A7F3D0;\n}\n.status-success[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: var(--success);\n  animation: none;\n}\n.status-error[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: #991B1B;\n  border: 1px solid #FECACA;\n}\n.status-error[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  background: var(--danger);\n  animation: none;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(0.85);\n  }\n}\n/*# sourceMappingURL=channel-input.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChannelInputComponent, [{
    type: Component,
    args: [{ selector: "app-channel-input", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="card">
  <div class="card-header">
    <div class="card-header-left">
      <div class="step-badge">1</div>
      <div>
        <div class="card-title">Add YouTube Channels</div>
        <div class="card-subtitle">Enter up to 3 channel URLs to process</div>
      </div>
    </div>
  </div>

  <!-- URL 1 -->
  <div class="form-group">
    <label class="form-label" for="url1">Channel URL 1</label>
    <div class="input-wrap">
      <span class="input-prefix">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.96-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
        </svg>
      </span>
      <input
        id="url1"
        type="url"
        [(ngModel)]="channelUrl1"
        placeholder="https://youtube.com/@channel1"
      />
      <span class="input-tag">CH1</span>
    </div>
  </div>

  <!-- URL 2 -->
  <div class="form-group">
    <label class="form-label" for="url2">
      Channel URL 2 <span class="optional">(optional)</span>
    </label>
    <div class="input-wrap">
      <span class="input-prefix">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.96-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
        </svg>
      </span>
      <input
        id="url2"
        type="url"
        [(ngModel)]="channelUrl2"
        placeholder="https://youtube.com/@channel2"
      />
      <span class="input-tag">CH2</span>
    </div>
  </div>

  <!-- URL 3 -->
  <div class="form-group">
    <label class="form-label" for="url3">
      Channel URL 3 <span class="optional">(optional)</span>
    </label>
    <div class="input-wrap">
      <span class="input-prefix">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.96-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
        </svg>
      </span>
      <input
        id="url3"
        type="url"
        [(ngModel)]="channelUrl3"
        placeholder="https://youtube.com/@channel3"
      />
      <span class="input-tag">CH3</span>
    </div>
  </div>

  <!-- Submit -->
  <div class="submit-row">
    <button
      class="btn btn-primary submit-btn"
      [disabled]="isLoading"
      (click)="submit()"
    >
      @if (isLoading) {
        <div class="spinner"></div>
        Processing\u2026
      } @else {
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2.5"
             stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polygon points="10 8 16 12 10 16 10 8"/>
        </svg>
        Start Processing
      }
    </button>
  </div>

  <!-- Status -->
  @if (status) {
    <div class="status-msg" [ngClass]="'status-' + status.type">
      <div class="status-dot"></div>
      <span>{{ status.text }}</span>
    </div>
  }
</div>
`, styles: ["/* src/app/features/dashboard/components/channel-input/channel-input.component.scss */\n.card {\n  background: var(--gradient-card);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-xl);\n  padding: 24px;\n  box-shadow: var(--shadow-sm);\n}\n.card-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.card-header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.step-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 26px;\n  background: var(--gradient-primary);\n  color: white;\n  font-size: 12px;\n  font-weight: 700;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.card-title {\n  font-family: var(--font-display);\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.2px;\n}\n.card-subtitle {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-top: 3px;\n}\n.form-group {\n  margin-bottom: 16px;\n}\n.form-group:last-of-type {\n  margin-bottom: 0;\n}\n.form-label {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n  margin-bottom: 6px;\n}\n.optional {\n  color: var(--text-subtle);\n  font-weight: 400;\n  text-transform: none;\n  letter-spacing: 0;\n}\n.input-wrap {\n  position: relative;\n}\n.input-prefix {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-subtle);\n  font-size: 13px;\n  pointer-events: none;\n  display: flex;\n  align-items: center;\n}\ninput[type=url] {\n  width: 100%;\n  padding: 10px 60px 10px 36px;\n  border: 1.5px solid var(--border-strong);\n  border-radius: var(--radius-md);\n  font-family: var(--font-primary);\n  font-size: 13px;\n  color: var(--text);\n  background: var(--surface);\n  transition: border-color 0.15s, box-shadow 0.15s;\n  outline: none;\n}\ninput[type=url]:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(153, 15, 250, 0.12);\n}\ninput[type=url]::placeholder {\n  color: var(--text-subtle);\n  font-style: italic;\n}\n.input-tag {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--text-subtle);\n  background: var(--surface-3);\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-family: var(--font-mono);\n}\n.submit-row {\n  margin-top: 20px;\n}\n.submit-btn {\n  width: 100%;\n  justify-content: center;\n  padding: 12px 20px;\n  font-size: 14px;\n}\n.status-msg {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 14px;\n  padding: 12px 16px;\n  border-radius: var(--radius-md);\n  font-size: 13px;\n  font-weight: 500;\n}\n.status-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  animation: pulse 1.5s ease-in-out infinite;\n}\n.status-info {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(153, 15, 250, 0.07) 0%,\n      rgba(230, 0, 118, 0.05) 100%);\n  color: var(--primary-dark);\n  border: 1px solid rgba(153, 15, 250, 0.2);\n}\n.status-info .status-dot {\n  background: var(--primary);\n}\n.status-success {\n  background: #ECFDF5;\n  color: #065F46;\n  border: 1px solid #A7F3D0;\n}\n.status-success .status-dot {\n  background: var(--success);\n  animation: none;\n}\n.status-error {\n  background: #FEF2F2;\n  color: #991B1B;\n  border: 1px solid #FECACA;\n}\n.status-error .status-dot {\n  background: var(--danger);\n  animation: none;\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(0.85);\n  }\n}\n/*# sourceMappingURL=channel-input.component.css.map */\n"] }]
  }], () => [{ type: VideoService }], { jobQueued: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChannelInputComponent, { className: "ChannelInputComponent", filePath: "app/features/dashboard/components/channel-input/channel-input.component.ts", lineNumber: 14 });
})();

// src/app/features/dashboard/dashboard.component.ts
var DashboardComponent = class _DashboardComponent {
  constructor(router) {
    this.router = router;
  }
  onJobQueued() {
    this.router.navigate(["/results"]);
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 8, vars: 0, consts: [[1, "page-body"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "input-wrapper"], [3, "jobQueued"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Categorize YouTube Channels");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Enter up to 3 channel URLs \u2014 our AI engine will fetch and categorize every video automatically.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "app-channel-input", 5);
        \u0275\u0275listener("jobQueued", function DashboardComponent_Template_app_channel_input_jobQueued_7_listener() {
          return ctx.onJobQueued();
        });
        \u0275\u0275elementEnd()()();
      }
    }, dependencies: [ChannelInputComponent], styles: ["\n.page-body[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 24px;\n}\n.page-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 26px;\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.4px;\n  margin-bottom: 8px;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n  line-height: 1.6;\n  max-width: 480px;\n  margin: 0 auto;\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 560px;\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [ChannelInputComponent], template: '<div class="page-body">\n\n  <div class="page-header">\n    <h1 class="page-title">Categorize YouTube Channels</h1>\n    <p class="page-subtitle">Enter up to 3 channel URLs \u2014 our AI engine will fetch and categorize every video automatically.</p>\n  </div>\n\n  <div class="input-wrapper">\n    <app-channel-input (jobQueued)="onJobQueued()" />\n  </div>\n\n</div>\n', styles: ["/* src/app/features/dashboard/dashboard.component.scss */\n.page-body {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 24px;\n}\n.page-header {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.page-title {\n  font-family: var(--font-display);\n  font-size: 26px;\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.4px;\n  margin-bottom: 8px;\n}\n.page-subtitle {\n  font-size: 14px;\n  color: var(--text-muted);\n  line-height: 1.6;\n  max-width: 480px;\n  margin: 0 auto;\n}\n.input-wrapper {\n  width: 100%;\n  max-width: 560px;\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n"] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "app/features/dashboard/dashboard.component.ts", lineNumber: 12 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-ZLIR4CHN.js.map
