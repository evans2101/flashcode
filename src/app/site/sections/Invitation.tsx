"use client";

import { motion } from "framer-motion";
import Image1 from "@/assets/ImageContainer.png";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const Invitation: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto p-4 md:p-0 -mt-20 md:-mt-40">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-50 border border-gray-800 rounded-xl flex items-center justify-center ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-5 p-4 m-4"
        >
          <h1 className="text-3xl md:text-4xl font-bold">
            Mulai Langkahmu Hari Ini!
          </h1>
          <p className="text-md text-gray-300">
            Daftar sekarang dan raih karier impian di dunia teknologi.
          </p>
          <motion.button
            className="flex mt-6 items-center w-full md:w-auto text-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-4xl shadow-lg hover:bg-gray-100 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Konsultasi Gratis <ChevronRight size={20} />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-auto"
        >
          <Image
            src={Image1}
            alt="Video Call"
            className="rounded-lg shadow-lg"
            width={550}
            height={350}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Invitation;
