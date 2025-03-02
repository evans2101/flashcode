"use client";

import { useEffect, useRef } from "react";
import TestimonialCard from "@/site/components/ui/TestimonialCard";
import { StaticImageData } from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string | StaticImageData;
  testimonial: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  direction?: "left" | "right";
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  testimonials,
  direction = "right",
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let animationFrame: number;
    const speed = 0.5;

    const animate = () => {
      if (marquee) {
        marquee.scrollLeft += direction === "left" ? -speed : speed;
        if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
          marquee.scrollLeft = 0;
        } else if (marquee.scrollLeft <= 0) {
          marquee.scrollLeft = marquee.scrollWidth / 2;
        }
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [direction]);

  return (
    <div className="overflow-hidden relative w-full" ref={marqueeRef}>
      <div className="flex gap-6 w-max whitespace-nowrap flex-nowrap">
        {[...testimonials, ...testimonials].map((item, index) => (
          <div key={index} className="shrink-0 w-auto max-w-sm">
            <TestimonialCard
              name={item.name}
              role={item.role}
              image={item.image}
              testimonial={item.testimonial}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
