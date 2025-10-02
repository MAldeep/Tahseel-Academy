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
export default function AboutUs({ locale }) {
  const { t } = useTranslation("common");
  const fontClass = locale === "ar" ? cairo.className : poppins.className;
  return (
    <div className="w-full flex flex-col gap-5 px-5 lg:px-28 py-5 lg:py-10">
      <h1 className={`${fontClass} font-bold text-5xl`}>{t("aboutTitle")} :</h1>
      <BlurText
        text={t("about_Content")}
        delay={150}
        animateBy="words"
        direction="top"
        className="text-2xl mb-8"
      />
    </div>
  );
}
