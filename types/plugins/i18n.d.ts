import 'vue-i18n';

declare module 'vue-i18n' {
    export interface I18nGlobal {
        t: (key: string) => string
    }
}
