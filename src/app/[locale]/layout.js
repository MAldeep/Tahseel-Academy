import Header from "../components/Header";
import I18nProvider from "../i18n-provider";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/sub-componants/WhatsAppButton";
import Loader from "../components/sub-componants/Loader";



export default async function LocaleLayout({ children, params }) {
  const { locale } = await  params;

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className="relative bg-gray-50">
        <I18nProvider locale={locale}>
          <Header locale={locale} />
          <Loader>
            {children}
          </Loader>
          <WhatsAppButton locale={locale}/>
        </I18nProvider>
        <Footer locale={locale}/>
      </body>
    </html>
  );
}
