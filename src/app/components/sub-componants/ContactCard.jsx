"use client";
import { Cairo, Poppins } from "next/font/google";
import { useParams } from "next/navigation";
import React from "react";
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
export default function ContactCard() {
  const params = useParams();
  const locale = params?.locale;

  // ظبط الاستدارة حسب اللغة
  const roundedAr = "rounded-t-2xl lg:rounded-r-2xl lg:rounded-l-none";
  const roundedEn = "rounded-t-2xl lg:rounded-l-2xl lg:rounded-r-none";
  const roundedClass = locale === "ar" ? roundedAr : roundedEn;
  const fontClass = locale === "ar" ? cairo.className : poppins.className;
  return (
    <div
      className={`bg-[#27479e] text-white flex flex-col items-start justify-center gap-6 p-10 min-h-[400px] w-full lg:w-2/5 shadow-md ${roundedClass} ${fontClass}`}
    >
      <h2 className="text-3xl font-bold">📞 Contact Info</h2>
      <p className="text-lg opacity-90">
        {locale === "ar"
          ? "تقدر تتواصل معانا بسهولة لأي استفسار أو دعم."
          : "You can reach us easily for any inquiry or support."}
      </p>

      <div className="space-y-2">
        <p>📍 Kuwait City, Kuwait</p>
        <p>✉️ tahsselacademy@gmail.com</p>
        <p>📱 +96541112662</p>
      </div>
    </div>
  );
}
