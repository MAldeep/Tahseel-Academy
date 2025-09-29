"use client";

import { Cairo, Poppins } from "next/font/google";
import { useTranslation } from "react-i18next";
const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-cairo",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});
export default function FeaturedCousres({locale}) {
  const { t } = useTranslation("common");
  const fontClass = locale === "ar" ? cairo.className : poppins.className;
  return (
    <div className="w-full px-3 lg:px-24 h-[40dvh] py-3.5 flex flex-col gap-3.5">
      <h1 className={`${fontClass}`}>{t("top_sales")}</h1>
    </div>
  );
}
