"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { useEffect, useState } from "react";
import TabContent from "@/site/components/ui/TabContent";
import VideoModal from "@/site/components/ui/VideoModal";
import { motion, AnimatePresence } from "framer-motion";

interface Program {
  id: string;
  title: string;
  description: string;
  video: string;
}

const programs: Program[] = [
  {
    id: "bootcamp",
    title: "Bootcamp",
    description:
      "Program intensif dengan kurikulum berbasis praktik, mentor berpengalaman, dan proyek nyata untuk mempersiapkanmu ke dunia kerja",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: "webinar",
    title: "Webinar",
    description:
      "Ikuti webinar terbaru tentang perkembangan teknologi dan industri IT.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: "english",
    title: "Kelas Inggris",
    description:
      "Tingkatkan kemampuan bahasa Inggrismu dengan metode pembelajaran interaktif.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const ProgramTabs: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [activeTab, setActiveTab] = useState("bootcamp");

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <section className="w-full max-w-7xl mx-auto -mt-12 md:mt-12">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-4xl font-bold mx-auto md:max-w-full max-w-[350px]">
          Program Kami
        </h2>
        <p className="text-gray-400 mt-3 mx-auto md:max-w-full max-w-[350px]">
          Pilih program yang sesuai dengan kebutuhan Anda.
        </p>
      </motion.div>

      <Tabs.Root
        value={activeTab}
        onValueChange={setActiveTab}
        className="mt-6"
      >
        <Tabs.List className="flex md:grid md:grid-cols-3 border-b border-gray-700 w-full max-w-xs md:max-w-full mx-auto overflow-x-auto">
          {programs.map((program) => (
            <Tabs.Trigger
              key={program.id}
              value={program.id}
              className="flex-1 text-center px-4 py-2 text-sm md:text-lg font-semibold border-b-2 border-transparent hover:text-blue-400 focus:outline-none data-[state=active]:border-blue-500"
            >
              {program.title}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        <AnimatePresence mode="wait">
          {programs.map(
            (program) =>
              activeTab === program.id && (
                <Tabs.Content key={program.id} value={program.id} forceMount>
                  <motion.div
                    key={program.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row items-center justify-center max-w-xs md:max-w-full mx-auto"
                  >
                    <TabContent program={program} onVideoClick={setSelectedVideo} />
                  </motion.div>
                </Tabs.Content>
              )
          )}
        </AnimatePresence>
      </Tabs.Root>

      <VideoModal videoUrl={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </section>
  );
};

export default ProgramTabs;
