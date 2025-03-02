"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const HeroContent = () => {
  return (
    <div className="px-6 sm:px-12 md:pl-[200px] flex flex-col mb-6 items-start justify-center w-full">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-4xl font-extrabold leading-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Jadi Programmer, Bangun Karier Impian
      </motion.h1>
      <motion.p
        className="mt-4 text-base sm:text-lg md:text-md font-light leading-[28px] text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Belajar dari nol hingga mahir dengan kurikulum berbasis praktik, mentor
        berpengalaman, dan proyek nyata.
      </motion.p>
      <motion.button
        className="flex mt-6 items-center w-full md:w-auto text-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-4xl shadow-lg hover:bg-gray-100 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Konsultasi Gratis <ChevronRight size={20} />
      </motion.button>
    </div>
  );
};

export default HeroContent;
