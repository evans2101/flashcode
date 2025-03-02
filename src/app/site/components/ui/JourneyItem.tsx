"use client";

import { Book, Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { useRef, useEffect } from "react";

interface JourneyItemProps {
  index: number;
  totalSteps: number;
  step: {
    title: string;
    description: string;
  };
  isOpen: boolean;
  toggleAccordion: (id: string) => void;
  contentRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  contentHeight: number;
}

const JourneyItem: React.FC<JourneyItemProps> = ({
  index,
  totalSteps,
  step,
  isOpen,
  toggleAccordion,
  contentRefs,
  contentHeight,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      contentRefs.current[index] = ref.current;
    }
  }, [index, contentRefs]);

  return (
    <div className="flex w-full md:w-400 max-w-7xl mx-auto items-center mb-4">
      <div className="relative flex flex-col items-center mr-2 sm:mr-6">
        <div className="relative w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-white font-bold border border-gray-500 rounded-full cursor-pointer text-sm sm:text-base bg-gray-900">
          {index + 1}
        </div>

        {index < totalSteps - 1 && (
          <div
            className="border-l border-dashed absolute top-full"
            style={{
              height: contentHeight,
              borderColor: "rgba(255, 255, 255, 0.5)", // Warna putih tipis
              borderWidth: "1px",
            }}
          ></div>
        )}
      </div>

      <Accordion.Item
        value={String(index)}
        className="border border-gray-500 rounded-xl overflow-hidden cursor-pointer w-[350px] md:w-full"
      >
        <Accordion.Header>
          <Accordion.Trigger
            onClick={() => toggleAccordion(String(index))}
            className="flex items-center justify-between w-full px-3 sm:px-6 py-3 sm:py-4 text-sm sm:text-lg font-semibold transition-all"
          >
            <div className="flex items-center gap-2">
              <Book className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              {step.title}
            </div>
            {isOpen ? (
              <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            ) : (
              <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            )}
          </Accordion.Trigger>
        </Accordion.Header>

        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="px-3 py-0 sm:px-6 overflow-hidden text-gray-400 text-sm sm:text-base"
          style={{ width: "100%" }}
          ref={ref}
        >
          {isOpen && <div className="mb-4">{step.description}</div>}
        </motion.div>
      </Accordion.Item>
    </div>
  );
};

export default JourneyItem;
