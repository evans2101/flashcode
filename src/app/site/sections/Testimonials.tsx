"use client";

import TestimonialSlider from "@/site/components/ui/TestimonialSlider";
import Image1 from "@/assets/image.png";
import Image2 from "@/assets/image21.png";
import Image3 from "@/assets/image22.png";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import * as Tooltip from "@radix-ui/react-tooltip";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: StaticImageData;
  testimonial: string;
}

const testimonials: Omit<Testimonial, "id">[] = [
  {
    name: "Robert Albert",
    role: "Frontend Developer",
    image: Image1,
    testimonial:
      "Lorem ipsum dolor sit amet consectetur. Sem tempor in facilisis vestibulum.",
  },
  {
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    image: Image2,
    testimonial:
      "Lorem ipsum dolor sit amet consectetur. Sem tempor in facilisis vestibulum.",
  },
  {
    name: "Michael Doe",
    role: "Backend Engineer",
    image: Image3,
    testimonial:
      "Lorem ipsum dolor sit amet consectetur. Sem tempor in facilisis vestibulum.",
  },
];

const testimonialsWithId: Testimonial[] = testimonials.map(
  (item, index): Testimonial => ({
    ...item,
    id: index + 1,
  })
);

export default function TestimonialPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-white min-h-screen mt-0 md:-mt-30 flex flex-col items-center justify-center w-full max-w-7xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-center mx-auto md:max-w-full max-w-[350px] w-full">
        Jadi Web Developer dalam Waktu Singkat
      </h1>
      <p className="text-center mt-3 text-gray-400 w-full mx-auto md:max-w-full max-w-[350px]">
        Pelajari skill programming yang dibutuhkan industri dengan kurikulum
        berbasis praktik
      </p>

      <div className="mt-6 flex flex-col gap-6 mx-auto md:max-w-full max-w-[390px]">
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <div>
                <TestimonialSlider
                  testimonials={testimonialsWithId}
                  direction="right"
                />
              </div>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                className="bg-gray-800 text-white text-sm px-3 py-2 rounded-md"
                side="top"
                align="center"
              >
                Geser untuk melihat lebih banyak!
                <Tooltip.Arrow className="fill-gray-800" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>

        <TestimonialSlider testimonials={testimonialsWithId} direction="left" />
      </div>
    </motion.div>
  );
}
