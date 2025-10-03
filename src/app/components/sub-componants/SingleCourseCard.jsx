"use client";
import { Cairo, Poppins } from "next/font/google";
import Link from "next/link";
import React from "react";
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

export default function SingleCourseCard({ course, locale }) {
  const fontClass = locale === "ar" ? cairo.className : poppins.className;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, boxShadow: "0px 10px 25px rgba(0,0,0,0.15)" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`w-full lg:w-2/5 flex flex-col gap-4 rounded-2xl bg-white overflow-hidden ${fontClass} px-2.5 pt-3.5`}
    >
      <img
        src={course.img}
        alt={course.title}
        className="w-full h-[500px] object-cover object-top rounded-2xl"
      />

      <div className="flex flex-col grow p-6">
        <h1 className="text-2xl font-bold mb-2">{course.title}</h1>
        <p className="text-gray-600 flex-grow">{course.desc}</p>

        <Link
          href={`/${locale}/courses/${course.id}`}
          className="mt-6 inline-block bg-blue-900 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {locale === "ar" ? "عرض التفاصيل" : "View Details"}
        </Link>
      </div>
    </motion.div>
  );
}
