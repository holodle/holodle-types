import INamed, { LocaleString } from "./Named"
import Branch, { IBranch } from "./Branch"

export interface IGeneration extends INamed {
    id: string
    branch: IBranch
    location: number
}

export default class Generation implements IGeneration {
    id: string
    name: LocaleString
    location: number
    branch: Branch

    constructor();

    constructor(obj: Partial<IGeneration>);

    constructor(obj?: Partial<IGeneration>) {
        this.id = obj?.id ?? ""
        this.name = obj?.name ?? { en: "Default" }
        this.location = obj?.location ?? 0
        this.branch = new Branch(obj?.branch ?? {})
    }
}
