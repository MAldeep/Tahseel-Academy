"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function WhatsAppButton({ locale }) {
  const phone = "+96541112662";
  const message = "Hello, I’m interested!";
  const [hovered, setHovered] = useState(false);
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;
  const btnPosition = locale === "ar" ? "left-6" : "right-6";
  return (
    <div
      className={`fixed bottom-6 ${btnPosition} flex items-center gap-2`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="px-3 py-1 bg-black text-white text-sm rounded-lg shadow"
          >
            WhatsApp us
          </motion.span>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white shadow-lg"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <MessageCircle size={28} />
      </motion.a>
    </div>
  );
}
