import { courses } from "@/data/courses";

export async function generateStaticParams() {
  return ["en", "ar"].flatMap((locale) =>
    courses[locale].map((course) => ({
      locale,
      id: course.id,
    }))
  );
}

export async function generateMetadata({ params }) {
  const { locale, id } = params;
  const data = courses[locale] || courses.en;
  const course = data.find((c) => c.id === id);

  if (!course) {
    return {
      title: locale === "ar" ? "الكورس غير موجود" : "Course Not Found",
      description:
        locale === "ar" ? "هذه الصفحة غير موجودة" : "This page does not exist",
    };
  }

  return {
    title: course.seo.title,
    description: course.seo.description,
    openGraph: {
      title: course.seo.title,
      description: course.seo.description,
      url: `https://yourdomain.com/${locale}/courses/${id}`,
      siteName: "Tahseel Academy",
      locale: locale === "ar" ? "ar_KW" : "en_US",
      type: "article",
    },
  };
}

export default function CoursePage({ params }) {
  const { locale, id } = params;
  const data = courses[locale] || courses.en;
  const course = data.find((c) => c.id === id);

  if (!course) {
    return (
      <h1 className="p-10 text-2xl">
        {locale === "ar" ? "الكورس غير موجود" : "Course not found"}
      </h1>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
      <p className="text-lg">{course.desc}</p>
    </div>
  );
}
