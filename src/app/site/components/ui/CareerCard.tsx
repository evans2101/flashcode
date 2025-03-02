"use client";

import { motion } from "framer-motion";
import { useCareerStore } from "@/site/hooks/useCareerStore";
import { IconType } from "react-icons";

interface CareerCardProps {
  title: string;
  description: string;
  icon: IconType;
}

const CareerCard: React.FC<CareerCardProps> = ({
  title,
  description,
  icon: Icon,
}) => {
  const { selectedCategory, setSelectedCategory } = useCareerStore();
  const isSelected = selectedCategory === title;

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <div
        className={`w-[405px] h-[230px] mx-auto p-6 flex flex-col items-start gap-4 cursor-pointer border rounded-xl transition-all duration-300 ${
          isSelected ? "border-blue-500 bg-gray-800" : "border-gray-800"
        }`}
        onClick={() => setSelectedCategory(title)}
      >
        <div className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-full">
          <Icon className="text-2xl text-white" />
        </div>

        <h3 className="text-xl font-semibold text-white text-left">{title}</h3>
        <p className="text-gray-400 text-left">{description}</p>
      </div>
    </motion.div>
  );
};

export default CareerCard;
