"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Search } from "lucide-react";
import FlagContainer from "@/assets/Flag Container.png";
import Workshop from "@/assets/Image Container.png";
import Interview from "@/assets/Card Image Container.png";
import Flags from "@/assets/flags.png";
import { useState, useEffect } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const jsFrameworkIcons = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
  "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
];

interface MarqueeProps {
  icons: (string | StaticImport)[];
  reverse: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({ icons, reverse }) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <motion.div
      className="flex flex-col gap-4 overflow-hidden"
      animate={
        isPaused
          ? { y: "0%" }
          : { y: reverse ? ["100%", "-100%"] : ["-100%", "100%"] }
      }
      transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {icons.map((icon, idx) => (
        <div
          key={idx}
          className="bg-gray-800 rounded-full flex items-center justify-center w-15 h-15"
        >
          <Image
            src={icon}
            alt="JS Framework Icon"
            width={25}
            height={25}
            className="object-contain"
          />
        </div>
      ))}
    </motion.div>
  );
};

const typingText = "Frontend Developer in USA";

const WhyChooseUs = () => {
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < typingText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + typingText[index]);
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setTypedText("");
        setIndex(0);
      }, 2000);
    }
  }, [index]);

  const cards = [
    {
      title: "Keahlian Berstandar Global",
      description:
        "Dapatkan keterampilan dengan standar lebih tinggi dari bootcamp lain, siap bersaing di pasar kerja internasional.",
      image: null,
      buttonText: "See More",
      isFrameworks: true,
    },
    {
      title: "Kelas Bahasa Inggris",
      description:
        "Asah kemampuan bahasa Inggris langsung dari native speaker agar lebih percaya diri di dunia kerja global.",
      image: FlagContainer,
      buttonText: "See More",
      imageClass: "absolute bottom-0 right-0 md:w-auto w-16", // Kartu 2: kecil di mobile
    },
    {
      title: "Workshop Pengembangan Portofolio",
      description:
        "Buat portofolio profesional dengan standar industri yang membedakanmu dari kandidat lain.",
      image: Workshop,
      imageClass: "absolute inset-0 w-full h-full object-cover opacity-20",
    },
    {
      title: "Workshop Persiapan Wawancara",
      description:
        "Pelajari teknik wawancara terbaik dalam sesi interaktif full English bersama mentor berpengalaman.",
      image: Interview,
      buttonText: "See More",
      imageClass: "absolute bottom-0 right-0",
    },
    {
      title: "Peluang Kerja Remote di Perusahaan Global",
      description:
        "Buka kesempatan kerja remote dengan gaji kompetitif hingga ribuan dolar per bulan.",
      image: Flags,
      imageClass: "absolute top-8 right-0 flex items-center",
    },
    {
      title: "Workshop Strategi Mencari Kerja Global",
      description:
        "Kuasi teknik mencari pekerjaan di luar negeri dan tingkatkan peluang kariermu secara internasional.",
      image: null,
      showSearch: true,
    },
  ];

  return (
    <section className="text-white w-full max-w-7xl mx-auto mt-12">
      <h2 className="text-3xl md:text-4xl text-center font-bold mx-auto md:max-w-full max-w-[350px]">
        Mengapa Harus Memilih Kami?
      </h2>
      <p className="text-gray-400 mt-3 text-center md:max-w-full mx-auto max-w-[350px]">
        Belajar dengan kurikulum industri, mentor ahli, dan dukungan hingga siap
        kerja
      </p>

      <div className="grid grid-cols-1 md:grid-cols-10 gap-4 px-4 md:px-0 mt-6 mx-auto md:max-w-full">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative border border-gray-700 rounded-xl overflow-hidden p-6 flex justify-between
              ${index === 2 ? "items-end justify-end" : ""}
              ${
                index === 3 || index === 4
                  ? "justify-between items-center"
                  : "flex-col justify-between"
              } 
                ${index === 5 ? "items-center justify-center" : ""} bg-black
                ${index === 0 ? "col-span-10 md:col-span-6" : "col-span-10"}
                ${index === 1 ? "md:col-span-4" : ""}
                ${index === 2 ? "md:col-span-4" : ""}
                ${index === 3 ? "md:col-span-6" : ""}
                ${index === 4 ? "md:col-span-5" : ""}
                ${index === 5 ? "md:col-span-5" : ""}

              `}
          >
            {card.isFrameworks ? (
              <div className="flex justify-between gap-12 items-center w-full">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold">{card.title}</h3>
                  <p className="text-gray-300 mt-2">{card.description}</p>
                  {card.buttonText && (
                    <button className="mt-4 flex items-center gap-2 px-12 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition">
                      {card.buttonText} <ArrowRight size={18} />
                    </button>
                  )}
                </div>

                <div className="flex w-1/4 gap-3 overflow-hidden">
                  <Marquee icons={jsFrameworkIcons} reverse={false} />
                  <Marquee icons={jsFrameworkIcons} reverse={true} />
                </div>
              </div>
            ) : (
              card.image && (
                <Image
                  src={card.image}
                  alt={card.title || "Image"}
                  width={220}
                  height={100}
                  className={`${card.imageClass} ${index === 3 ? "pr-4" : ""}`}
                />
              )
            )}

            <div className="relative z-10 p-4">
              {index !== 0 && (
                <>
                  <h3
                    className={`text-2xl font-semibold
                      ${index === 5 ? "max-w-[300px]" : ""} ${
                      index === 3 || index === 4 ? "max-w-[300px]" : ""
                    }`}
                  >
                    {card.title}
                  </h3>

                  <p
                    className={`text-gray-300 mt-2 ${
                      index === 3 || index === 4 ? "max-w-[300px]" : ""
                    }
                      ${index === 1 || index === 0 ? "max-w-[400px]" : ""}`}
                  >
                    {card.description}
                  </p>

                  {card.buttonText && (
                    <button className="mt-4 flex items-center gap-2 px-12 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition">
                      {card.buttonText} <ArrowRight size={18} />
                    </button>
                  )}
                </>
              )}

              {card.showSearch && (
                <div className="mt-4 flex items-center gap-2 bg-gray-800 rounded-xl p-2">
                  <Search size={18} className="text-gray-400" />
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-white"
                  >
                    {typedText}
                  </motion.span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
