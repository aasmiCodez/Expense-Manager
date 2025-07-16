"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  actualTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light"); // Start with light to prevent hydration mismatch
  const [actualTheme, setActualTheme] = useState<"light" | "dark">("light");

  // Get system preference
  const getSystemTheme = (): "light" | "dark" => {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  };

  // Calculate actual theme based on current theme setting
  const calculateActualTheme = (currentTheme: Theme): "light" | "dark" => {
    if (currentTheme === "system") {
      return getSystemTheme();
    }
    return currentTheme;
  };

  // Load theme from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("expense-tracker-theme") as Theme;
      const initialTheme = stored || "light"; // Default to light mode
      setTheme(initialTheme);
      setActualTheme(calculateActualTheme(initialTheme));
    }
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      const handleChange = () => {
        if (theme === "system") {
          setActualTheme(getSystemTheme());
        }
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);

  // Apply theme to document (only on client)
  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      // Add a small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        const root = document.documentElement;

        if (actualTheme === "dark") {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
      }, 0);

      return () => clearTimeout(timer);
    }
  }, [actualTheme]);

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    setActualTheme(calculateActualTheme(newTheme));
    if (typeof window !== "undefined") {
      localStorage.setItem("expense-tracker-theme", newTheme);
    }
  };

  const toggleTheme = () => {
    const newTheme = actualTheme === "light" ? "dark" : "light";
    handleSetTheme(newTheme);
  };

  const value = {
    theme,
    actualTheme,
    setTheme: handleSetTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Return default values instead of throwing
    return {
      theme: "light" as const,
      actualTheme: "light" as const,
      setTheme: () => {},
      toggleTheme: () => {},
    };
  }
  return context;
}
