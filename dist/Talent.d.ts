import INamed, { LocaleString } from './Named.js';
import Generation, { IGeneration } from './Generation.js';
import './Branch.js';

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

export { type ITalent, Talent as default };
