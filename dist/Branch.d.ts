import INamed, { LocaleString } from './Named.js';

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
