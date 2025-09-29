"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation"; 
import { images } from "../../../../public/assets/images";

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  // Run loader on first page load
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Run loader on every route change
  useEffect(() => {
    if (!pathname) return;
    setLoading(true); // show loader immediately
    const timer = setTimeout(() => setLoading(false), 500); // hide after delay
    return () => clearTimeout(timer);
  }, [pathname]);

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
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            >
              <Image src={images.logo.src} alt="Logo" width={200} height={200} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* App content */}
      <div
        className={`transition-opacity duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
