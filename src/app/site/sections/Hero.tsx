"use client";

import MeteorEffects from "@/site/components/ui/MeteorEffects";
import HeroContent from "@/site/components/ui/HeroContent";
import HeroImage from "@/site/components/ui/HeroImage";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center mx-auto w-screen min-h-screen text-white overflow-hidden">
      <div className="absolute inset-0 w-full h-full grid grid-cols-10 grid-rows-10 gap-1 opacity-20">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="border border-gray-700 bg-transparent"></div>
        ))}
      </div>
      <MeteorEffects />
      <HeroContent />
      <HeroImage />
    </section>
  );
};

export default Hero;
