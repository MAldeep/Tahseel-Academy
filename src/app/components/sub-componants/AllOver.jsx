"use client";
import { Cairo, Poppins } from "next/font/google";
import React from "react";
import { useTranslation } from "react-i18next";
import { images } from "../../../../public/assets/images";
import CTAbtn from "./CTAbtn";
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
export default function AllOver({locale}) {
  const { t } = useTranslation("common");
  const fontClass = locale === "ar" ? cairo.className : poppins.className;

  return (
    <div className="w-full relative h-[70dvh] overflow-hidden">
      <img
        src={images.allover.src}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
        {/* Content goes here */}
        <div className="text-center text-white px-4">
          <p className={`text-2xl text-white ${fontClass}`}>
            {t("brand")}
          </p>
          <h1
            className={`text-4xl md:text-6xl font-bold w-full lg:w-2xl ${fontClass} leading-relaxed`}
          >
            {t("brand_desc")}
          </h1>
          <CTAbtn font={fontClass} />
        </div>
      </div>
    </div>
  );
}
