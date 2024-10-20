"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  Branch: () => Branch,
  Generation: () => Generation,
  Talent: () => Talent
});
module.exports = __toCommonJS(main_exports);

// src/Branch.ts
var Branch = class {
  constructor(obj) {
    var _a, _b;
    this.id = (_a = obj == null ? void 0 : obj.id) != null ? _a : "";
    this.name = (_b = obj == null ? void 0 : obj.name) != null ? _b : { en: "Default" };
  }
};

// src/Generation.ts
var Generation = class {
  constructor(obj) {
    var _a, _b, _c, _d;
    this.id = (_a = obj == null ? void 0 : obj.id) != null ? _a : "";
    this.name = (_b = obj == null ? void 0 : obj.name) != null ? _b : { en: "Default" };
    this.location = (_c = obj == null ? void 0 : obj.location) != null ? _c : 0;
    this.branch = new Branch((_d = obj == null ? void 0 : obj.branch) != null ? _d : {});
  }
};

// src/Talent.ts
var Talent = class {
  constructor(obj) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    this.id = (_a = obj == null ? void 0 : obj.id) != null ? _a : "";
    this.name = (_b = obj == null ? void 0 : obj.name) != null ? _b : { en: "Default" };
    this.generations = ((_c = obj == null ? void 0 : obj.generations) != null ? _c : [{}]).map((g) => new Generation(g));
    this.birthday = (_d = obj == null ? void 0 : obj.birthday) != null ? _d : "0101";
    this.anniversary = (_e = obj == null ? void 0 : obj.anniversary) != null ? _e : "0101";
    this.imageColor = (_f = obj == null ? void 0 : obj.imageColor) != null ? _f : "#ffffff";
    this.height = (_g = obj == null ? void 0 : obj.height) != null ? _g : 0;
    this.outfitCount = (_h = obj == null ? void 0 : obj.outfitCount) != null ? _h : 0;
    this.originalSongCount = (_i = obj == null ? void 0 : obj.originalSongCount) != null ? _i : 0;
    this.enableOn = (_j = obj == null ? void 0 : obj.enableOn) != null ? _j : null;
    this.disableOn = (_k = obj == null ? void 0 : obj.disableOn) != null ? _k : null;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Branch,
  Generation,
  Talent
});
//# sourceMappingURL=main.js.map