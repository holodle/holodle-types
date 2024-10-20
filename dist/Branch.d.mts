import INamed, { LocaleString } from './Named.mjs';

interface IBranch extends INamed {
    id: string;
}
declare class Branch implements IBranch {
    id: string;
    name: LocaleString;
    constructor();
    constructor(obj: Partial<IBranch>);
}

export { type IBranch, Branch as default };
