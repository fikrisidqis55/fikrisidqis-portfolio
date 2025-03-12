import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeState = {
  theme: "modern" | "pixel";
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "modern",
      toggleTheme: () =>
        set({ theme: get().theme === "modern" ? "pixel" : "modern" }),
    }),
    {
      name: "theme-storage",
    }
  )
);
