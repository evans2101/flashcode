"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronRight,
  GraduationCap,
  Video,
  BookOpen,
  Info,
  Target,
  HelpCircle,
} from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import DropdownMenuItem from "@/site/components/ui/DropdownMenuItem"
import Logo from "@/assets/logo.png";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const menuItems = {
    program: [
      {
        icon: GraduationCap,
        title: "Bootcamp",
        desc: "Program intensif pembelajaran",
      },
      { icon: Video, title: "Webinar", desc: "Seminar daring interaktif" },
      {
        icon: BookOpen,
        title: "Kelas Inggris",
        desc: "Belajar bahasa Inggris bersama",
      },
    ],
    tentangKami: [
      {
        icon: Info,
        title: "Tentang Kami",
        desc: "Mengenal lebih jauh tentang kami",
      },
      {
        icon: Target,
        title: "Visi & Misi",
        desc: "Tujuan dan nilai perusahaan",
      },
      {
        icon: HelpCircle,
        title: "FAQ",
        desc: "Pertanyaan yang sering diajukan",
      },
    ],
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 shadow-md backdrop-blur-md ${
        isScrolled ? "bg-black-50 bg-opacity-90" : "bg-transparent"
      }`}
    >
      <div className="container w-full max-w-7xl mx-auto py-6 flex items-center justify-between">
        <Link href="/">
          <motion.div
            className="text-2xl font-bold text-white dark:text-white pl-6 md:pl-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
          <Image src={Logo} alt="FlashCode" width={120} height={40} />
          </motion.div>
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-white dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 rounded-4xl transition"
          >
            Beranda
          </Link>

          <DropdownMenuItem items={menuItems.program} label="Program" />
          <DropdownMenuItem
            items={menuItems.tentangKami}
            label="Tentang Kami"
          />

          <Link
            href="/blog"
            className="text-white dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 rounded-4xl transition"
          >
            Blog
          </Link>
        </nav>

        <motion.button
          className="hidden md:flex items-center gap-2 px-6 py-3 bg-white text-black rounded-4xl shadow-lg hover:bg-gray-100 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Daftar Sekarang <ChevronRight size={20} />
        </motion.button>

        <div className="md:hidden flex items-center gap-4 px-4">
          <button
            className="text-white dark:text-gray-200"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
      <hr className="border-t border-white" />

      {isOpen && (
        <div className="md:hidden bg-[#0C0D0D] h-screen absolute top-full left-0 w-full shadow-lg z-50 py-4 px-6 flex flex-col space-y-3">
          <Link
            href="/"
            className="text-white dark:text-white"
            onClick={toggleMenu}
          >
            Beranda
          </Link>
          <DropdownMenuItem items={menuItems.program} label="Program" />
          <DropdownMenuItem
            items={menuItems.tentangKami}
            label="Tentang Kami"
          />
          <Link
            href="/blog"
            className="text-white dark:text-white"
            onClick={toggleMenu}
          >
            Blog
          </Link>
          <motion.button
            className="w-full mt-6 px-6 py-3 bg-white text-black rounded-4xl flex justify-center items-center shadow-lg hover:bg-gray-800 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Daftar Sekarang <ChevronRight size={20} />
          </motion.button>

          <div className="absolute bottom-10 left-6 flex gap-4">
            <FaFacebook
              size={24}
              className="text-white dark:text-gray-200 hover:text-blue-500"
            />
            <FaTwitter
              size={24}
              className="text-white dark:text-gray-200 hover:text-blue-400"
            />
            <FaInstagram
              size={24}
              className="text-white dark:text-gray-200 hover:text-pink-500"
            />
            <FaLinkedin
              size={24}
              className="text-white dark:text-gray-200 hover:text-blue-700"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
