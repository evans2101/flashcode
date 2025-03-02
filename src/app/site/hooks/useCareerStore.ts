"use client";

import { create } from "zustand";

interface CareerState {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

export const useCareerStore = create<CareerState>((set) => ({
  selectedCategory: null,
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));
