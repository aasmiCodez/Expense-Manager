"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (
    email: string,
    password: string,
  ) => Promise<{ success: boolean; message?: string }>;
  signup: (
    name: string,
    email: string,
    password: string,
  ) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock user for demo
  const mockUser: User = {
    id: "1",
    email: "aasmi@example.com",
    name: "Aasmi C",
    avatar: "/api/placeholder/150/150",
  };

  useEffect(() => {
    // Check for stored auth on mount
    const checkAuth = () => {
      try {
        const storedUser = localStorage.getItem("expense-tracker-user");
        const storedToken = localStorage.getItem("expense-tracker-token");

        if (storedUser && storedToken) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Auth check error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // Small delay to prevent hydration mismatch
    setTimeout(checkAuth, 100);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (email === "aasmi@example.com" && password === "password123") {
        const token = "mock-token-" + Date.now();

        localStorage.setItem("expense-tracker-user", JSON.stringify(mockUser));
        localStorage.setItem("expense-tracker-token", token);

        setUser(mockUser);
        setIsLoading(false);
        return { success: true };
      } else {
        setIsLoading(false);
        return { success: false, message: "Invalid credentials" };
      }
    } catch (error) {
      setIsLoading(false);
      return { success: false, message: "Login failed" };
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newUser = { ...mockUser, name, email, id: "new-" + Date.now() };
      const token = "mock-token-" + Date.now();

      localStorage.setItem("expense-tracker-user", JSON.stringify(newUser));
      localStorage.setItem("expense-tracker-token", token);

      setUser(newUser);
      setIsLoading(false);
      return { success: true };
    } catch (error) {
      setIsLoading(false);
      return { success: false, message: "Signup failed" };
    }
  };

  const logout = () => {
    localStorage.removeItem("expense-tracker-user");
    localStorage.removeItem("expense-tracker-token");
    setUser(null);
  };

  const value = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
