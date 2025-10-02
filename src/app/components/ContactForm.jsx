"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useParams } from "next/navigation";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const params = useParams();
  const locale = params?.locale;
  const roundedEn = "rounded-t-2xl lg:rounded-r-2xl lg:rounded-tl-none";
  const roundedAr = "rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none";
  const roundedClass = locale === "ar" ? roundedAr : roundedEn;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "your_service_id",
        "your_template_id", 
        formData,
        "your_public_key" 
      )
      .then(
        () => setStatus("✅ Message sent!"),
        (error) => setStatus("❌ Failed to send: " + error.text)
      );
  };

  return (
    <div className="h-screen w-full">
      <div className="h-full w-full flex items-center justify-center">
        <div className="h-full w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`flex flex-col h-full bg-center bg-cover items-center justify-center w-full gap-6 bg-gradient-to-tr from-sky-100 to-blue-300 p-4 ${roundedClass}`}
          >
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="my-6 text-white text-3xl font-bold"
            >
              Contact Us
            </motion.h1>

            <motion.form
              onSubmit={sendEmail}
              className="flex flex-col gap-4 w-2/3"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              <motion.input
                variants={{
                  hidden: { y: 25, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-white/70 hover:bg-white placeholder:text-violet-500 text-violet-700 py-3 px-5 focus:outline focus:outline-offset-1 focus:outline-violet-500 rounded-md"
                required
              />

              <motion.input
                variants={{
                  hidden: { y: 25, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                whileFocus={{ scale: 1.02 }}
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-white/70 hover:bg-white placeholder:text-violet-500 text-violet-700 py-3 px-5 focus:outline focus:outline-offset-1 focus:outline-violet-500 rounded-md"
                required
              />

              <motion.textarea
                variants={{
                  hidden: { y: 25, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                whileFocus={{ scale: 1.02 }}
                name="message"
                placeholder="Enter Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="bg-white/70 hover:bg-white placeholder:text-violet-500 text-violet-700 py-3 px-5 focus:outline focus:outline-offset-1 focus:outline-violet-500 rounded-md"
                required
              />

              <motion.button
                variants={{
                  hidden: { y: 25, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-6 py-3 bg-violet-600 rounded-md font-semibold transition-all text-white hover:bg-white hover:text-violet-700 hover:scale-105 cursor-pointer"
              >
                Submit
              </motion.button>
            </motion.form>

            {status && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="mt-4 text-white text-center"
              >
                {status}
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
