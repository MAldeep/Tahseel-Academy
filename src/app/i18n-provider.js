"use client";

import { I18nextProvider } from "react-i18next";
import { initI18n } from "../i18n";

export default function I18nProvider({ children, locale }) {
  const i18n = initI18n(locale);
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
