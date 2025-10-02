"use client";
import Link from "next/link";
import React from "react";
import { images } from "../../../public/assets/images";
import NavLinks from "./sub-componants/NavLinks";
import { useTranslation } from "react-i18next";
import { Cairo, Poppins } from "next/font/google";
import CircularText from "./sub-componants/CircularText";
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
export default function Footer({ locale }) {
  const { t } = useTranslation("common");
  const fontClass = locale === "ar" ? cairo.className : poppins.className;

  return (
    <footer
      className={`w-full h-[80dvh] lg:h-[40dvh] bg-gray-50 flex flex-col  justify-between items-center px-3.5 lg:px-32 py-7 ${fontClass}`}
    >
      <div className="w-full flex flex-col lg:flex-row justify-start items-start lg:items-center gap-3.5 lg:gap-9">
        <div className="flex justify-between w-full lg:w-1/2">
          <Link href={`/${locale}`}>
            <img
              src={images.logo.src}
              className="w-[80px] h-[80px] object-cover rounded-[50%]"
            />
          </Link>
          <p className="w-full lg:w-[400px]">{t("footer_description")}</p>
        </div>
        <nav className="flex flex-col gap-4 text-[16px]">
          <Link
            href={`/${locale}`}
            className={`relative group transition-all duration-300 text-black`}
          >
            {t("home")}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1E3A8A] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href={`/${locale}/about`}
            className={`relative group transition-all duration-300 text-black`}
          >
            {t("aboutTitle")}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1E3A8A] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href={`/${locale}/contact`}
            className={`relative group transition-all duration-300 text-black`}
          >
            {t("contactTitle")}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1E3A8A] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href={`/${locale}/courses`}
            className={`relative group transition-all duration-300 text-black `}
          >
            {t("courses")}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1E3A8A] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>
        <CircularText
          text="Tahseel Academy @ 2025"
          onHover="speedUp"
          spinDuration={20}
          className="custom-class"
        />
      </div>
      <p>Copyrights @2025</p>
    </footer>
  );
}
