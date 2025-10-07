"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useParams } from "next/navigation";
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
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const params = useParams();
  const locale = params?.locale;

  const roundedAr = "rounded-b-2xl lg:rounded-l-2xl lg:rounded-r-none";
  const roundedEn = "rounded-b-2xl lg:rounded-r-2xl lg:rounded-l-none";
  const roundedClass = locale === "ar" ? roundedAr : roundedEn;
  const fontClass = locale === "ar" ? cairo.className : poppins.className;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send("service_oabig9p", "template_qrvazxv", formData, "yXzmb02ob8rdOiNKA")
      .then(
        () => setStatus("✅ Message sent!"),
        (error) => setStatus("❌ Failed to send: " + error.text)
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className={`bg-gradient-to-tr from-sky-50 to-blue-100 w-full lg:w-3/5 p-10 shadow-md ${roundedClass} ${fontClass}`}
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6 text-2xl font-bold text-[#27479e]"
      >
        {locale === "ar" ? "تواصل معنا" : "Contact Us"}
      </motion.h1>

      <motion.form
        onSubmit={sendEmail}
        className="flex flex-col gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >

        <motion.input
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          whileFocus={{ scale: 1.02 }}
          type="text"
          name="name"
          placeholder={locale === "ar" ? " اسمك" : "Enter Your Name"}
          value={formData.name}
          onChange={handleChange}
          className="bg-white py-3 px-5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <motion.input
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          whileFocus={{ scale: 1.02 }}
          type="email"
          name="email"
          placeholder={
            locale === "ar" ? " بريدك الإلكتروني" : "Enter Your Email"
          }
          value={formData.email}
          onChange={handleChange}
          className="bg-white py-3 px-5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <motion.input
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          whileFocus={{ scale: 1.02 }}
          type="tel"
          name="phone"
          placeholder={locale === "ar" ? "رقم الموبايل" : "Phone Number"}
          value={formData.phone}
          onChange={handleChange}
          className={`bg-white py-3 px-5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            locale === "ar" ? "text-right" : "text-left"
          }`}
          dir={locale === "ar" ? "rtl" : "ltr"} 
          required
        />


        <motion.textarea
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          whileFocus={{ scale: 1.02 }}
          name="message"
          placeholder={locale === "ar" ? "اكتب رسالتك" : "Enter Your Message"}
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="bg-white py-3 px-5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />


        <motion.button
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="px-6 py-3 bg-[#27479e] rounded-lg font-semibold text-white hover:bg-blue-700 transition-all"
        >
          {locale === "ar" ? "إرسال" : "Submit"}
        </motion.button>
      </motion.form>

      {status && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mt-4 text-center text-sm text-gray-600"
        >
          {status}
        </motion.p>
      )}
    </motion.div>
  );
}
