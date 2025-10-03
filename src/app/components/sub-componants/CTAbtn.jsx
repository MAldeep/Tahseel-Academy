"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function CTAbtn({font}) {
  const { t } = useTranslation("common");

  const phone = "+96541112662";
  const message = "Hello, I’m interested!";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`mt-6 px-6 py-3 bg-white text-black rounded-lg shadow-md hover:bg-gray-200 transition cursor-pointer animate-pulse inline-block ${font}`}
    >
      {t("hero_Btn")}
    </a>
  );
}
