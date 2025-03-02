"use client";

import { motion } from "framer-motion";

const MeteorEffects = () => {
  const meteors = Array.from({ length: 10 });

  return (
    <>
      {meteors.map((_, i) => (
        <motion.div
          key={i}
          className=" absolute w-[2px] h-6 bg-blue-500 rounded-full opacity-80"
          initial={{ y: "-10%", opacity: 0 }}
          animate={{ y: "110%", opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
          style={{ left: `${(i + 1) * 10}%` }}
        />
      ))}
    </>
  );
};

export default MeteorEffects;
