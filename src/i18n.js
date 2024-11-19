import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locals/en.json";
import translationFR from "./locals/fr.json";

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fr",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

// // src/i18n.js
// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import HttpApi from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";

// i18n
//   .use(HttpApi) // Load translation files
//   .use(LanguageDetector) // Detect the language
//   .use(initReactI18next) // Pass i18n instance to react-i18next
//   .init({
//     supportedLngs: ["en", "fr"], //  supported languages
//     fallbackLng: "en",
//     detection: {
//       order: [
//         "path",
//         "cookie",
//         "localStorage",
//         "navigator",
//         "htmlTag",
//         "subdomain",
//       ],
//       caches: ["cookie"],
//     },
//     backend: {
//       loadPath: "./locals/en.json", // Path to translation files
//     },
//     react: {
//       useSuspense: false,
//     },
//   });

// export default i18n;
