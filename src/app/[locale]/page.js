"use client";

import { useTranslation } from "react-i18next";

export default function Home({ params }) {
  const { t } = useTranslation("common");

  return (
    <main className="w-full min-h-[150vh] mt-32">
      <h1 className="text-4xl font-bold ">{t("welcome")}</h1>
      {/* <button
        onClick={toggleLanguage}
        className="mt-6 px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
      >
        {locale === "ar" ? "English" : "العربية"}
      </button> */}
    </main>
  );
}
