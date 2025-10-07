"use client";

import Link from "next/link";
import { courses } from "@/data/courses";
import { motion } from "framer-motion";
import { use } from "react";
import { images } from "../../../../public/assets/images";
import { Cairo, Poppins } from "next/font/google";
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
export default function CoursesPage({ params }) {
  const { locale } = use(params);
  const data = courses[locale] || courses.en;
  const fontClass = locale === "ar" ? cairo.className : poppins.className;

  return (
    <div className={`${fontClass}`}>
      <img
        src={images.courses.src}
        className="w-full h-[60vh] object-cover relative"
      />
      {/* overlay */}
      <div className="w-full h-[60vh] absolute inset-0 bg-black/50"></div>
      <div className="w-full px-4 lg:px-20 py-6">
        <h1 className="text-4xl font-bold mb-10 text-center">
          {locale === "ar" ? "البرامج" : "Courses"}
        </h1>
        <div className="flex flex-col gap-6">
          {data.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="w-full rounded-2xl bg-white shadow-lg hover:shadow-2xl transition p-6 flex flex-col justify-between"
            >
              <div className="w-full flex flex-col lg:flex-row gap-3">
                <div>
                  <h2 className="text-3xl font-semibold mb-4">
                    {course.title}
                  </h2>
                  <p className="text-gray-600 text-2xl">{course.desc}</p>
                </div>
                <img src={course.img} className="w-full lg:w-1/2 h-[300px] object-cover object-center rounded-2xl"/>
              </div>
              <Link
                href={`/${locale}/courses/${course.id}`}
                className="mt-6 inline-block bg-[#27479e] text-white text-center px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                {locale === "ar" ? "عرض التفاصيل" : "View Details"}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
