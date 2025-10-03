import React from "react";
import { images } from "../../../../public/assets/images";
import ContactCard from "@/app/components/sub-componants/ContactCard";
import ContactForm from "@/app/components/ContactForm";

export default function page() {
  return (
    <div className=" min-h-dvh flex flex-col gap-5">
      <img src={images.contact.src} className="w-full h-[60vh] object-cover" />
      <div className="w-full px-4 lg:px-2 my-8 flex flex-col lg:flex-row">
        <ContactCard />
        <ContactForm />
      </div>
    </div>
  );
}
