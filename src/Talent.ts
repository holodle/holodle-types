import INamed, { LocaleString } from "./Named"
import Generation, { IGeneration } from "./Generation"

export interface ITalent extends INamed {
    id: string
    generations: IGeneration[]
    birthday: string
    anniversary: string
    imageColor: string
    height: number
    outfitCount: number
    originalSongCount: number
    enableOn: string | null
    disableOn: string | null
}

export default class Talent implements ITalent {
    id: string
    name: LocaleString
    generations: Generation[]
    birthday: string
    anniversary: string
    imageColor: string
    height: number
    outfitCount: number
    originalSongCount: number
    enableOn: string | null
    disableOn: string | null

    constructor();

    constructor(obj: Partial<ITalent>);

    constructor(obj?: Partial<ITalent>) {
        this.id = obj?.id ?? ""
        this.name = obj?.name ?? { en: "Default" }
        this.generations = (obj?.generations ?? [{}]).map((g: Partial<IGeneration>) => new Generation(g))
        this.birthday = obj?.birthday ?? "0101"
        this.anniversary = obj?.anniversary ?? "0101"
        this.imageColor = obj?.imageColor ?? "#ffffff"
        this.height = obj?.height ?? 0
        this.outfitCount = obj?.outfitCount ?? 0
        this.originalSongCount = obj?.originalSongCount ?? 0
        this.enableOn = obj?.enableOn ?? null
        this.disableOn = obj?.disableOn ?? null
    }
}
