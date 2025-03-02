"use client";

import CareerCard from "@/site/components/ui/CareerCard";
import {
  FaCode,
  FaChartLine,
  FaExchangeAlt,
  FaGlobe,
  FaClock,
  FaGraduationCap,
} from "react-icons/fa";

const careerOptions = [
  {
    title: "Pemula yang Ingin Mulai Coding",
    description: "Belajar dari nol dengan metode praktis yang sesuai industri.",
    icon: FaCode,
  },
  {
    title: "Programmer yang Ingin Naik Level",
    description:
      "Tingkatkan skill ke standar global dan buka lebih banyak peluang.",
    icon: FaChartLine,
  },
  {
    title: "Profesional yang Ingin Beralih Karier",
    description: "Mulai transisi ke dunia teknologi dengan roadmap yang jelas.",
    icon: FaExchangeAlt,
  },
  {
    title: "Siap Berkarier Secara Global?",
    description:
      "Persiapkan diri untuk pekerjaan remote dengan gaji kompetitif.",
    icon: FaGlobe,
  },
  {
    title: "Ingin Karier yang Lebih Fleksibel?",
    description: "Kuasi skill programming dan kerja dari mana saja.",
    icon: FaClock,
  },
  {
    title: "Mahasiswa yang Ingin Selangkah Lebih Maju",
    description: "Bangun skill sejak dini untuk bersaing di dunia kerja.",
    icon: FaGraduationCap,
  },
];

const CareerCards: React.FC = () => {
  return (
    <section className="text-center w-full max-w-7xl mx-auto mt-12">
      <h2 className="text-3xl font-bold mx-auto md:max-w-full max-w-[350px]">
        Siap Mengembangkan Karier di Programming?
      </h2>
      <p className="text-gray-400 mt-3 mx-auto md:max-w-full max-w-[350px]">
        Bangun skill programming yang siap kerja dengan kurikulum praktis dan
        mentor berpengalaman.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 mt-6">
        {careerOptions.map((career) => (
          <CareerCard key={career.title} {...career} />
        ))}
      </div>
    </section>
  );
};

export default CareerCards;
