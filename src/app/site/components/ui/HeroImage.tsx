"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeroImageSrc from "@/assets/hero.png";
import ImageGradiate from "@/assets/hero1.png";
import HeroMobile from "@/assets/heroMobile.png";

const HeroImage = () => {
  return (
    <motion.div
      className="relative w-85 h-85 md:w-full md:max-w-[56vw] md:h-[600px]"
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="hidden md:block w-full h-full">
        <Image
          src={HeroImageSrc}
          alt="Hero Image"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="block md:hidden w-50 h-50">
        <Image
          src={HeroMobile}
          alt="Hero Mobile"
          fill
          className="object-cover"
          priority
        />
      </div>

      <Image
        src={ImageGradiate}
        alt="Gradient Overlay"
        fill
        className="absolute inset-0 object-cover opacity-80"
        priority
      />
    </motion.div>
  );
};

export default HeroImage;
