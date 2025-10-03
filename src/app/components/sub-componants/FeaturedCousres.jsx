"use client";

import { courses } from "@/data/courses";
import { Cairo, Poppins } from "next/font/google";
import { useTranslation } from "react-i18next";
import SingleCourseCard from "./SingleCourseCard";
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
export default function FeaturedCousres({ locale }) {
  const { t } = useTranslation("common");
  const fontClass = locale === "ar" ? cairo.className : poppins.className;
  const data = courses[locale];
  return (
    <div className="w-full px-3 lg:px-14 min-h-[40dvh] py-3.5 flex flex-col gap-3.5 mt-10 mb-10">
      <h1
        className={`${fontClass} text-3xl font-bold bg-[#27479e] text-white w-full p-2.5 text-center rounded-2xl`}
      >
        {t("courses_title")}
      </h1>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center flex-wrap gap-6 mt-8">
        {data.map((course, index) => (
          <SingleCourseCard key={course.id} course={course} locale={locale} />
        ))}
      </div>
    </div>
  );
}
