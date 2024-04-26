import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"


i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        lng: 'de',
        resources: {
            en: {translation: { cakeConfigurator: "Cake Configurator",}},
            de: {translation: { cakeConfigurator: "Kuchen-Konfigurator" }},
        }
    })

export default i18n;