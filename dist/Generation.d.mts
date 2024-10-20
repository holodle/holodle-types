import INamed, { LocaleString } from './Named.mjs';
import Branch, { IBranch } from './Branch.mjs';

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

export { type IGeneration, Generation as default };
