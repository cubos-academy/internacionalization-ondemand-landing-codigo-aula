import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18next
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: import.meta.env.MODE === "development",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });
