"use client";

import { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { LucideIcon, ChevronDown, ChevronUp } from "lucide-react";

interface MenuItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface DropdownMenuItemProps {
  items: MenuItem[];
  label: string;
}

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
  items,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleItemClick = () => {
    setIsOpen(false); // Menutup menu setelah memilih
  };

  return (
    <>
      <div className="md:hidden w-full">
        <button
          className="w-full text-left flex justify-between items-center py-2 text-white dark:text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {label} {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {isOpen && (
          <div className="bg-black text-white shadow-lg max-h-screen overflow-y-scroll overscroll-hidden">
            {items.map(({ icon: Icon, title, desc }, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 rounded-xl"
                onClick={handleItemClick}
              >
                <div className="border border-gray-500 rounded-xl p-2">
                  <Icon size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="text-xs text-gray-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="hidden md:block">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="text-gray-200 dark:text-gray-200 hover:bg-gray-700 hover:text-gray-100  dark:hover:bg-gray-700 px-4 py-2 rounded-4xl transition">
            {label} ▾
          </DropdownMenu.Trigger>
          <DropdownMenu.Content className="bg-black border border-gray-700 text-white shadow-lg rounded-xl p-2 mt-2 max-h-auto overflow-hidden">
          {items.map(({ icon: Icon, title, desc }, index) => (
              <DropdownMenu.Item
                key={index}
                className="flex items-center gap-4 p-3 rounded-xl transition focus:outline-none"
              >
                <div className="border border-gray-500 rounded-xl p-2 transition hover:bg-gray-700 hover:border-none">
                  <Icon
                    size={24}
                    className="text-gray-200 hover:text-black transition"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="text-xs text-gray-400">{desc}</p>
                </div>
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </>
  );
};

export default DropdownMenuItem;
