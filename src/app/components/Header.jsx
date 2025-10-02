"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { HiMenuAlt3 } from "react-icons/hi";
import { useEffect, useState } from "react";
import SideMenu from "./sub-componants/SideMenu";
import { images } from "../../../public/assets/images";
import NavLinks from "./sub-componants/NavLinks";

export default function Header({ locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const toggleLanguage = () => {
    const newLocale = locale === "ar" ? "en" : "ar";
    router.push(`/${newLocale}`);
  };
  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`w-full flex justify-between items-center px-4 lg:px-16 py-3 fixed top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <Link href={`/${locale}`}>
        <img
          src={images.logo.src}
          className="w-[80px] h-[80px] object-cover rounded-[50%]"
        />
      </Link>
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} locale={locale} />
      <NavLinks
        locale={locale}
        classes={`hidden lg:flex w-2xl justify-between gap-8`}
        isScrolled={isScrolled}
      />
      <motion.div
        className="w-24 h-10 flex items-center justify-between rounded-full cursor-pointer relative overflow-hidden border border-gray-300 bg-gray-100"
        onClick={toggleLanguage}
        initial={false}
      >
        {/* Sliding Knob (behind text) */}
        <motion.div
          layout
          className="absolute w-12 h-8 rounded-full shadow-md z-0"
          animate={{
            left: locale === "ar" ? "3px" : "calc(100% - 3px - 48px)", // adjust for smaller knob
            backgroundColor: "#1E3A8A", // Formal navy blue
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
        {/* AR Label */}
        <motion.span
          className="absolute left-4 text-sm font-semibold z-10"
          animate={{
            scale: locale === "ar" ? 1.1 : 1,
            color: locale === "ar" ? "#fff" : "#444",
            opacity: locale === "ar" ? 1 : 0.7,
          }}
          transition={{ duration: 0.3 }}
        >
          AR
        </motion.span>
        {/* EN Label */}
        <motion.span
          className="absolute right-4 text-sm font-semibold z-10"
          animate={{
            scale: locale === "en" ? 1.1 : 1,
            color: locale === "en" ? "#fff" : "#444",
            opacity: locale === "en" ? 1 : 0.7,
          }}
          transition={{ duration: 0.3 }}
        >
          EN
        </motion.span>
      </motion.div>
      <HiMenuAlt3
        className={`text-2xl block lg:hidden ${
          isScrolled ? "text-black" : "text-white"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-50"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}
