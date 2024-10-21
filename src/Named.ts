export type Locales = "en" | "jp" | "id" | "kr" | "cn-S" | "cn-T"

export type LocaleString = { "en": string } & Partial<{
    [key in Locales]: string
}>

export default interface INamed {
    name: LocaleString
}
