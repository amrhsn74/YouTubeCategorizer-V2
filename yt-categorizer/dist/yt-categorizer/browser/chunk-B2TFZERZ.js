import {
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-RBZGX75M.js";

// src/app/core/services/video.service.ts
var VideoService = class _VideoService {
  constructor(http) {
    this.http = http;
    this.baseUrl = "/api/Videos";
  }
  processChannels(input) {
    return this.http.post(`${this.baseUrl}/process`, input);
  }
  getCategorizedVideos() {
    return this.http.get(`${this.baseUrl}/categorized`);
  }
  static {
    this.\u0275fac = function VideoService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VideoService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VideoService, factory: _VideoService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VideoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  VideoService
};
//# sourceMappingURL=chunk-B2TFZERZ.js.map
