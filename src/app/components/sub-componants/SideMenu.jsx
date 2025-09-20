"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { IoCloseSharp } from "react-icons/io5";

export default function SideMenu({ isOpen, setIsOpen, locale }) {
  const { t } = useTranslation("common");
  return (
    <div
      className={`fixed top-0 right-0 z-50 h-full flex flex-col justify-center items-center w-64 bg-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <IoCloseSharp
        className="text-2xl absolute top-2 left-2"
        onClick={() => setIsOpen(false)}
      />
      <nav className="w-full flex flex-col gap-4 items-center text-2xl text-[#4B3F72] font-bold">
        <Link href={`/${locale}`} className="hover:underline">
          {t("home")}
        </Link>
        <Link href={`/${locale}/about`} className="hover:underline">
          {t("aboutTitle")}
        </Link>
        <Link href={`/${locale}/contact`} className="hover:underline">
          {t("contactTitle")}
        </Link>
        <Link href={`/${locale}/courses`}>{t("courses")}</Link>
      </nav>
    </div>
  );
}
