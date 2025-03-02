import { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string | StaticImageData;
  testimonial: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  name,
  role,
  image,
  testimonial,
}) => {
  return (
    <div className="text-white p-6 border border-gray-800 rounded-xl shadow-lg w-[390px] h-[155px]">
      <p className="text-left text-gray-300 truncate">{testimonial}</p>
      <div className="flex items-center gap-3 mt-8">
        <Image
          src={image}
          alt={name}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
