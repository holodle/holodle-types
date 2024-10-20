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

// src/Talent.ts
var Talent_exports = {};
__export(Talent_exports, {
  default: () => Talent
});
module.exports = __toCommonJS(Talent_exports);

// src/Branch.ts
var Branch = class {
  id;
  name;
  constructor(obj) {
    this.id = (obj == null ? void 0 : obj.id) ?? "";
    this.name = (obj == null ? void 0 : obj.name) ?? { en: "Default" };
  }
};

// src/Generation.ts
var Generation = class {
  id;
  name;
  location;
  branch;
  constructor(obj) {
    this.id = (obj == null ? void 0 : obj.id) ?? "";
    this.name = (obj == null ? void 0 : obj.name) ?? { en: "Default" };
    this.location = (obj == null ? void 0 : obj.location) ?? 0;
    this.branch = new Branch((obj == null ? void 0 : obj.branch) ?? {});
  }
};

// src/Talent.ts
var Talent = class {
  id;
  name;
  generations;
  birthday;
  anniversary;
  imageColor;
  height;
  outfitCount;
  originalSongCount;
  enableOn;
  disableOn;
  constructor(obj) {
    this.id = (obj == null ? void 0 : obj.id) ?? "";
    this.name = (obj == null ? void 0 : obj.name) ?? { en: "Default" };
    this.generations = ((obj == null ? void 0 : obj.generations) ?? [{}]).map((g) => new Generation(g));
    this.birthday = (obj == null ? void 0 : obj.birthday) ?? "0101";
    this.anniversary = (obj == null ? void 0 : obj.anniversary) ?? "0101";
    this.imageColor = (obj == null ? void 0 : obj.imageColor) ?? "#ffffff";
    this.height = (obj == null ? void 0 : obj.height) ?? 0;
    this.outfitCount = (obj == null ? void 0 : obj.outfitCount) ?? 0;
    this.originalSongCount = (obj == null ? void 0 : obj.originalSongCount) ?? 0;
    this.enableOn = (obj == null ? void 0 : obj.enableOn) ?? null;
    this.disableOn = (obj == null ? void 0 : obj.disableOn) ?? null;
  }
};
//# sourceMappingURL=Talent.js.map