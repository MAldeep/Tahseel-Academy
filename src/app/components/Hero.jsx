"use client";
import React from "react";
import { images } from "../../../public/assets/images";
import { useTranslation } from "react-i18next";
import { Cairo, Poppins } from "next/font/google";
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
export default function Hero({ locale }) {
  const { t } = useTranslation("common");
  const fontClass = locale === "ar" ? cairo.className : poppins.className;

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
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
          <h1 className="text-4xl md:text-6xl font-bold w-full lg:w-2xl">
            {t("hero_Main")}
          </h1>
          <p className="mt-4 text-lg md:text-xl">{t("hero_Sec")}</p>
          <button className="mt-6 px-6 py-3 bg-white text-black rounded-lg shadow-md hover:bg-gray-200 transition cursor-pointer animate-pulse">
            {t("hero_Btn")}
          </button>
        </div>
      </div>
    </div>
  );
}
