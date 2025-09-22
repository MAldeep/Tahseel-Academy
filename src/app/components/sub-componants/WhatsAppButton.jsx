"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function WhatsAppButton() {
  const phone = "01064661009";
  const whatsappLink = `https://wa.me/${phone}`;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 flex items-center gap-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
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
