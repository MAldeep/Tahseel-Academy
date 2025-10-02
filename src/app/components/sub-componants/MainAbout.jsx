"use client";
import { Cairo, Poppins } from "next/font/google";
import React from "react";
import { useTranslation } from "react-i18next";
import BlurText from "./BlurText";
import { images } from "../../../../public/assets/images";
import { motion } from "framer-motion";

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
    <div className="w-full px-3 lg:px-24 bg-gray-100 min-h-[40dvh] py-3.5 flex flex-col gap-3.5">
      {/* Animated heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className={`${fontClass} text-3xl font-bold`}
      >
        {t("who")}
      </motion.h1>

      {/* Animated content */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <BlurText
            text={t("about_Content")}
            delay={150}
            animateBy="words"
            direction="top"
            className={`text-2xl mb-8 ${fontClass}`}
          />
        </motion.div>

        {/* Animated image */}
        <motion.img
          src={images.logo.src}
          alt="About Logo"
          className="w-1/2 rounded-2xl h-[50dvh] lg:h-[60dvh] object-cover"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}
