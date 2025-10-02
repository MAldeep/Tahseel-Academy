import React from "react";
import { images } from "../../../../public/assets/images";

export default function page() {
  return (
    <div className=" min-h-dvh flex flex-col gap-5">
      <img src={images.contact.src} className="w-full h-[60vh] object-cover" />
      contact
    </div>
  );
}
