import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface Program {
  id: string;
  title: string;
  description: string;
  video: string;
}

interface TabContentProps {
  program: Program;
  onVideoClick: (videoUrl: string) => void;
}

const TabContent: React.FC<TabContentProps> = ({ program, onVideoClick }) => {
  return (
    <div className="mt-6 flex flex-col md:flex-row gap-6 items-center md:py-20 w-full justify-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 order-1 md:order-none"
      >
        <h3 className="text-2xl font-bold">{program.title}</h3>
        <p className="mt-3 text-gray-300">{program.description}</p>

        <motion.button
          className="hidden md:flex mt-6 items-center gap-2 px-6 py-3 bg-white text-black rounded-4xl shadow-lg hover:bg-gray-100 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Lihat Detail <ChevronRight size={20} />
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 relative cursor-pointer order-2 md:order-none"
        onClick={() => onVideoClick(program.video)}
      >
        <video
          className="w-800 h-full md:h-full rounded-xl shadow-lg"
          src={program.video}
          muted
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 flex items-center justify-center bg-gray-600 bg-opacity-70 rounded-full transition hover:bg-opacity-90 shadow-lg">
            <span className="text-white text-2xl font-bold">▶</span>
          </div>
        </div>
      </motion.div>
      <motion.button
        className="flex md:hidden order-3 mt-4 w-full items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-4xl shadow-lg hover:bg-gray-100 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Lihat Detail <ChevronRight size={20} />
      </motion.button>
    </div>
  );
};

export default TabContent;
