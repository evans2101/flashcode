"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useCarouselStore } from "@/site/hooks/useCarouselStore";
import CarouselItem from "@/site/components/ui/CarouselItem";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image1 from "@/assets/image.png";
import Image2 from "@/assets/image21.png";
import Image3 from "@/assets/image22.png";

const items = [
  { id: 1, image: Image1, title: "Landing Page", author: "Robert Lewandowski" },
  { id: 2, image: Image2, title: "Dashboard", author: "Robert Lewandowski" },
  { id: 3, image: Image3, title: "Dashboard", author: "Robert Lewandowski" },
  { id: 4, image: Image1, title: "Mobile App", author: "Robert Lewandowski" },
  { id: 5, image: Image2, title: "Web Design", author: "Robert Lewandowski" },
  { id: 6, image: Image3, title: "E-commerce", author: "Robert Lewandowski" },
];

const Carousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    slidesToScroll: 1,
    align: "center",
  });

  const { setCurrentIndex } = useCarouselStore();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    const selectedIndex = emblaApi.selectedScrollSnap();
    const lastIndex = emblaApi.scrollSnapList().length - 1;

    setCurrentIndex(selectedIndex);
    setCanScrollPrev(selectedIndex > 0);
    setCanScrollNext(selectedIndex < lastIndex);
  }, [emblaApi, setCurrentIndex]);

  useEffect(() => {
    if (!emblaApi) return;
  
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      emblaApi.scrollTo(1, true);
    }
  
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);
  

  return (
    <div className="relative w-full mt-12 max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-bold mx-auto md:max-w-full max-w-[350px]">Dari Belajar ke Karya Nyata</h2>
        <p className="text-gray-400 mt-3 mx-auto md:max-w-full max-w-[350px]">
          Lihat karya nyata dari para murid yang telah menguasai skill.
        </p>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-x-6 mt-8 mx-auto md:max-w-full max-w-[200px]">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_25%] mx-auto"
              >
              <CarouselItem {...item} />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 flex gap-x-2">
        <button
          className="p-2 bg-gray-800 rounded-full disabled:opacity-50 cursor-pointer"
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canScrollPrev}
        >
          <ChevronLeft className="text-white" />
        </button>

        <button
          className="p-2 bg-gray-800 rounded-full disabled:opacity-50 cursor-pointer"
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canScrollNext}
        >
          <ChevronRight className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
