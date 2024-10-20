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
export {
  Talent as default
};
//# sourceMappingURL=Talent.mjs.map