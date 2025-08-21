"use client"
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const root = document.documentElement; // Or document.body if preferred
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children} {/* No need for <div className={theme}> anymore */}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
