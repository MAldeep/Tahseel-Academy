"use client";
import { Cairo, Poppins } from "next/font/google";
import Link from "next/link";
import React from "react";
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
export default function NavLinks({locale , classes}) {
  const { t } = useTranslation("common");
  const fontClass = locale === "ar" ? cairo.className : poppins.className;

  return (
    <nav className={`${classes} ${fontClass}`}>
      <Link
        href={`/${locale}`}
        className="relative group transition-all duration-300 hover:text-[#9333ea]"
      >
        {t("home")}
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1E3A8A] transition-all duration-300 group-hover:w-full"></span>
      </Link>
      <Link
        href={`/${locale}/about`}
        className="relative group transition-all duration-300 hover:text-[#9333ea]"
      >
        {t("aboutTitle")}
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1E3A8A] transition-all duration-300 group-hover:w-full"></span>
      </Link>
      <Link
        href={`/${locale}/contact`}
        className="relative group transition-all duration-300 hover:text-[#9333ea]"
      >
        {t("contactTitle")}
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1E3A8A] transition-all duration-300 group-hover:w-full"></span>
      </Link>
      <Link
        href={`/${locale}/courses`}
        className="relative group transition-all duration-300 hover:text-[#9333ea]"
      >
        {t("courses")}
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1E3A8A] transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </nav>
  );
}
