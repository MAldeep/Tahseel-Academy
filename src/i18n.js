import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

// 👇 لازم نعمل export للـ initI18n
export function initI18n(locale = "ar") {
  i18n
    .use(HttpApi)
    .use(initReactI18next)
    .init({
      supportedLngs: ["en", "ar"],
      fallbackLng: "ar",
      lng: locale, // اللغة تيجي من Next.js
      backend: {
        loadPath: "/locales/{{lng}}/{{ns}}.json"
      },
      react: {
        useSuspense: false
      }
    });
  return i18n;
}
