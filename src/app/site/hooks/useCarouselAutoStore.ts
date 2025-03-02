import { create } from "zustand";

interface CarouselAutoState {
  isHovered: boolean;
  setHovered: (value: boolean) => void;
}

export const useCarouselAutoStore = create<CarouselAutoState>((set) => ({
  isHovered: false,
  setHovered: (value) => set({ isHovered: value }),
}));
