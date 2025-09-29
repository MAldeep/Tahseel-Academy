"use client";
import { Cairo, Poppins } from "next/font/google";
import React from "react";
import { useTranslation } from "react-i18next";
import BlurText from "./BlurText";
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
export default function MainAbout({ locale }) {
  const { t } = useTranslation("common");
  const fontClass = locale === "ar" ? cairo.className : poppins.className;
  return (
    <div className="w-full px-3 lg:px-24 bg-gray-100 h-[40dvh] py-3.5 flex flex-col gap-3.5">
      <h1 className={`${fontClass} text-3xl font-bold`}>{t("who")}</h1>
      <div className="w-full flex justify-center">
        <BlurText
          text={t("footer_description")}
          delay={150}
          animateBy="words"
          direction="top"
          className={`text-2xl mb-8 ${fontClass}`}
        />
      </div>
    </div>
  );
}
