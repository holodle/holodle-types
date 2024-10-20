import INamed, { LocaleString } from "./Named"

export interface IBranch extends INamed {
    id: string
}

export default class Branch implements IBranch {
    id: string
    name: LocaleString

    constructor();

    constructor(obj: Partial<IBranch>);

    constructor(obj?: Partial<IBranch>) {
        this.id = obj?.id ?? ""
        this.name = obj?.name ?? { en: "Default" }
    }
}
