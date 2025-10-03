"use client";

import Link from "next/link";
import { courses } from "@/data/courses";
import { motion } from "framer-motion";
import { use } from "react";

export default function CoursesPage({ params }) {
  const { locale } = use(params);
  const data = courses[locale] || courses.en;

  return (
    <div className="p-10">
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
            <div>
              <h2 className="text-2xl font-semibold mb-4">{course.title}</h2>
              <p className="text-gray-600 text-sm">{course.desc}</p>
            </div>

            <Link
              href={`/${locale}/courses/${course.id}`}
              className="mt-6 inline-block bg-blue-600 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              {locale === "ar" ? "عرض التفاصيل" : "View Details"}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
