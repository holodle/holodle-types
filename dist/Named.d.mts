type Locales = "en" | "jp" | "id" | "kr" | "cn-S" | "cn-T";
type LocaleString = Partial<{
    [key in Locales]: string;
}>;
interface INamed {
    name: LocaleString;
}

export type { LocaleString, Locales, INamed as default };
