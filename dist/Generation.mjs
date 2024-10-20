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
export {
  Generation as default
};
//# sourceMappingURL=Generation.mjs.map