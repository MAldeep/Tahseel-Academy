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
export default function AboutUs({ locale }) {
  const { t } = useTranslation("common");
  const fontClass = locale === "ar" ? cairo.className : poppins.className;
  const goals = t("about_goal", { returnObjects: true });
  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="w-full flex flex-col gap-5 px-5 lg:px-28 py-5 lg:py-10">
        <h1 className={`${fontClass} font-bold text-5xl`}>{t("who")} </h1>
        <BlurText
          text={t("about_pitch")}
          delay={150}
          animateBy="words"
          direction="top"
          className={`text-2xl whitespace-pre-line font-bold ${fontClass} font-bold`}
        />
        {Array.isArray(goals) ? (
          goals.map((line, i) => (
            <BlurText
              key={i}
              text={line}
              delay={150}
              animateBy="words"
              direction="top"
              className={`text-2xl ${fontClass}`}
            />
          ))
        ) : (
          <BlurText
            text={goals}
            delay={150}
            animateBy="words"
            direction="top"
            className={`text-2xl ${fontClass} whitespace-pre-line`}
          />
        )}
      </div>
      <motion.img
        src={images.logo.src}
        alt="About Logo"
        className="w-full lg:w-1/2 rounded-2xl h-[50dvh] lg:h-[60dvh] object-cover"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </div>
  );
}
