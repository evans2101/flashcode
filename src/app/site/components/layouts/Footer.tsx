"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Music } from "lucide-react";
import Logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <div className="w-full border-t border-white/20">
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-7xl mx-auto text-white py-10 px-4 md:px-4 lg:px-0"
      >
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col gap-3">
            <Image src={Logo} alt="FlashCode" width={120} height={40} />
            <div className="flex gap-6 mt-4 md:mt-0 text-gray-400 text-sm md:text-base">
              <Link href="/terms" className="hover:text-white transition">
                Syarat & Ketentuan
              </Link>
              <span className="hidden md:block">•</span>
              <Link href="/privacy" className="hover:text-white transition">
                Kebijakan Privasi
              </Link>
            </div>
          </div>

          <div className="flex gap-4 mt-4 md:mt-0 md:flex-row items-center">
            <Link href="#" className="p-2 rounded-full border border-gray-700 hover:border-white transition">
              <Facebook size={20} className="text-gray-400 hover:text-white" />
            </Link>
            <Link href="#" className="p-2 rounded-full border border-gray-700 hover:border-white transition">
              <Instagram size={20} className="text-gray-400 hover:text-white" />
            </Link>
            <Link href="#" className="p-2 rounded-full border border-gray-700 hover:border-white transition">
              <Linkedin size={20} className="text-gray-400 hover:text-white" />
            </Link>
            <Link href="#" className="p-2 rounded-full border border-gray-700 hover:border-white transition">
              <Music size={20} className="text-gray-400 hover:text-white" />
            </Link>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Footer;
