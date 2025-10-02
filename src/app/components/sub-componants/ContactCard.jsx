"use client";
import { useParams } from "next/navigation";
import React from "react";

export default function ContactCard() {
  const params = useParams();
  const locale = params?.locale;
  const roundedAr = "rounded-t-2xl lg:rounded-r-2xl lg:rounded-tl-none";
  const roundedEn = "rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none";
  const roundedClass = locale === "ar" ? roundedAr : roundedEn;
  return (
    <div
      className={`bg-[#27479e] min-h-[50dvh] w-full lg:w-2/5 text-white ${roundedClass}`}
    >
      contact info
    </div>
  );
}
