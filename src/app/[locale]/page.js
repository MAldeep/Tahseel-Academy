import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";
import AllOver from "../components/sub-componants/AllOver";
import ContactCard from "../components/sub-componants/ContactCard";
import FeaturedCousres from "../components/sub-componants/FeaturedCousres";
import MainAbout from "../components/sub-componants/MainAbout";

export default async function Home({ params }) {
  const { locale } = await params;
  return (
    <main className="w-full  overflow-hidden">
      <Hero locale={locale}/>
      <FeaturedCousres locale={locale} />
      <AllOver locale={locale}/>
      <MainAbout locale={locale} />
      <div className="w-full px-4 lg:px-2 my-8 flex flex-col lg:flex-row">
        <ContactCard />
        <ContactForm />
      </div>
    </main>
  );
}
