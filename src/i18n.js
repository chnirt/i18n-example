import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./i18n/locales/en.json";
import vn from "./i18n/locales/vn.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translations: en
      },
      vn: {
        translations: vn
      }
    },
    lng: "en",
    fallbackLng: "en", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    },
    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations"
  });

export default i18n;
