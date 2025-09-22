// src/components/Loader.jsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { images } from "../../../../public/assets/images";

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // ⏱️ 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 flex items-center justify-center bg-white z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Replace /logo.png with your logo file */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            >
              <Image src={images.logo.src} alt="Logo" width={100} height={100} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Show app content after loader */}
      <div className={loading ? "opacity-0" : "opacity-100 transition-opacity"}>
        {children}
      </div>
    </div>
  );
}
