"use client";

import { useState, useRef, useEffect } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import JourneyItem from "@/site/components/ui/JourneyItem";

interface JourneyStep {
  title: string;
  description: string;
}

const journeySteps: JourneyStep[] = [
  {
    title: "Fundamental Programming",
    description:
      "Mulai dari dasar dengan memahami konsep logika pemrograman, algoritma, dan struktur data.",
  },
  {
    title: "Building Real Projects",
    description:
      "Belajar membangun aplikasi nyata dengan pendekatan hands-on, memahami alur kerja pengembangan.",
  },
  {
    title: "Advanced & Problem Solving",
    description:
      "Mengasah kemampuan problem solving dengan studi kasus kompleks, serta memperdalam algoritma.",
  },
  {
    title: "Career Preparation",
    description:
      "Persiapan untuk memasuki dunia kerja dengan pelatihan intensif dan workshop strategi pencarian kerja.",
  },
];

const JourneySection: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<string[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [contentHeights, setContentHeights] = useState<number[]>([]);

  useEffect(() => {
    const heights = contentRefs.current.map((ref) => ref?.scrollHeight || 0);
    setContentHeights(heights);
  }, [openIndexes]);

  const toggleAccordion = (id: string) => {
    setOpenIndexes((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mt-12 text-white w-full max-w-7xl mx-auto flex flex-col items-center md:max-w-full max-w-[350px]"
    >
      <div className="text-center px-4 sm:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Perjalanan Belajarmu di Bootcamp
        </h2>
        <p className="mt-3 text-gray-400 text-sm sm:text-base">
          Ikuti setiap fase pembelajaran, dari dasar hingga siap bekerja.
        </p>
      </div>

      <Accordion.Root type="multiple" className="relative w-full mt-8 mx-auto">
        {journeySteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <JourneyItem
              index={index}
              totalSteps={journeySteps.length}
              step={step}
              isOpen={openIndexes.includes(String(index))}
              toggleAccordion={toggleAccordion}
              contentRefs={contentRefs}
              contentHeight={contentHeights[index] || 30}
            />
          </motion.div>
        ))}
      </Accordion.Root>
    </motion.div>
  );
};

export default JourneySection;
