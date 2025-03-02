import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface CarouselItemProps {
  image: StaticImageData | string;
  title: string;
  author: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  image,
  title,
  author,
}) => {
  return (
    <motion.div
      className="flex flex-col "
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-[340px] h-[340px] md:w-[385px] md:h-[385px] overflow-hidden rounded-lg relative">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <h3 className="mt-3 text-lg font-semibold">{title}</h3>
      <p className="text-gray-400">{author}</p>
    </motion.div>
  );
};

export default CarouselItem;
