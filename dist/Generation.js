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

// src/Generation.ts
var Generation_exports = {};
__export(Generation_exports, {
  default: () => Generation
});
module.exports = __toCommonJS(Generation_exports);

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
//# sourceMappingURL=Generation.js.map