"use client";
import React from "react";
import { images } from "../../../public/assets/images";
import { useTranslation } from "react-i18next";
import { Cairo, Poppins } from "next/font/google";
import CTAbtn from "./sub-componants/CTAbtn";
const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "700"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});
export default function Hero({ locale }) {
  const { t } = useTranslation("common");
  const fontClass = locale === "ar" ? cairo.className : poppins.className;

  return (
    <div className="relative w-full h-dvh overflow-hidden">
      {/* Background Image */}
      <img
        src={images.hero.src}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        {/* Content goes here */}
        <div className="text-center text-white px-4">
          <h1 className={`text-4xl md:text-6xl font-bold w-full lg:w-2xl ${fontClass} leading-relaxed`}>
            {t("hero_Main")}
          </h1>
          <p className={`mt-4 text-lg md:text-xl ${fontClass}`}>{t("hero_Sec")}</p>
          <CTAbtn font={fontClass}/>
        </div>
      </div>
    </div>
  );
}
