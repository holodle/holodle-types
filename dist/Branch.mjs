// src/Branch.ts
var Branch = class {
  id;
  name;
  constructor(obj) {
    this.id = (obj == null ? void 0 : obj.id) ?? "";
    this.name = (obj == null ? void 0 : obj.name) ?? { en: "Default" };
  }
};
export {
  Branch as default
};
//# sourceMappingURL=Branch.mjs.map