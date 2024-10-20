type Locales = "en" | "jp" | "id" | "kr" | "cn-S" | "cn-T";
type LocaleString = Partial<{
    [key in Locales]: string;
}>;
interface INamed {
    name: LocaleString;
}

interface IBranch extends INamed {
    id: string;
}
declare class Branch implements IBranch {
    id: string;
    name: LocaleString;
    constructor();
    constructor(obj: Partial<IBranch>);
}

interface IGeneration extends INamed {
    id: string;
    branch: IBranch;
    location: number;
}
declare class Generation implements IGeneration {
    id: string;
    name: LocaleString;
    location: number;
    branch: Branch;
    constructor();
    constructor(obj: Partial<IGeneration>);
}

interface ITalent extends INamed {
    id: string;
    generations: IGeneration[];
    birthday: string;
    anniversary: string;
    imageColor: string;
    height: number;
    outfitCount: number;
    originalSongCount: number;
    enableOn: string | null;
    disableOn: string | null;
}
declare class Talent implements ITalent {
    id: string;
    name: LocaleString;
    generations: Generation[];
    birthday: string;
    anniversary: string;
    imageColor: string;
    height: number;
    outfitCount: number;
    originalSongCount: number;
    enableOn: string | null;
    disableOn: string | null;
    constructor();
    constructor(obj: Partial<ITalent>);
}

export { Branch, Generation, type IBranch, type IGeneration, type ITalent, type LocaleString, type Locales, Talent };
