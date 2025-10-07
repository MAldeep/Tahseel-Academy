import { courses } from "@/data/courses";
import { Cairo, Poppins } from "next/font/google";
import { images } from "../../../../../public/assets/images";
import CTAbtn from "@/app/components/sub-componants/CTAbtn";
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
      url: `https://tahsselacademy.com/${locale}/courses/${id}`,
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
  const fontClass = locale === "ar" ? cairo.className : poppins.className;

  if (!course) {
    return (
      <h1 className="p-10 text-2xl">
        {locale === "ar" ? "الكورس غير موجود" : "Course not found"}
      </h1>
    );
  }

  return (
    <div className="">
      <img
        src={images.courses.src}
        className="w-full h-[60vh] object-cover relative"
      />
      {/* overlay */}
      <div className="w-full h-[60vh] absolute inset-0 bg-black/50"></div>
      <div className="px-4 lg:px-20 py-9 flex flex-col gap-12 items-center bg-gray-100">
        <h1 className={`text-4xl font-bold mb-4 ${fontClass}`}>
          {course.title}
        </h1>
        <div className="w-full flex flex-col lg:flex-row gap-3.5 justify-between items-center">
          <div>
            <pre className={`${fontClass} text-[18px] lg:text-[18px] whitespace-pre-wrap`}>{course.details}</pre>
            <CTAbtn font={fontClass}/>
          </div>
          <img
            src={course.img}
            className="w-full lg:w-1/2 rounded-3xl object-cover h-[100vh]"
          />
        </div>
      </div>
    </div>
  );
}
