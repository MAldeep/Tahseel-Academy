import { Cairo, Poppins } from "next/font/google";
import Header from "../components/Header";
import I18nProvider from "../i18n-provider";



export default function LocaleLayout({ children, params }) {
  const { locale } = params;

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className="relative bg-gray-50">
        <I18nProvider locale={locale}>
          <Header locale={locale} />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
