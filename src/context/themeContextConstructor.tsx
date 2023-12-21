import React, { createContext, useState } from "react";

export type ThemeContextType = {
  theme: "light" | "dark";
  handleThemeChange: (newTheme: ThemeContextType["theme"]) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  handleThemeChange: (newTheme: ThemeContextType["theme"]) => {},
});

interface Props {
  children: React.ReactNode;
}

const ThemeContextConstructor = ({ children }: Props) => {
  const [theme, setTheme] = useState<ThemeContextType["theme"]>("dark");

  const handleThemeChange = (newTheme: ThemeContextType["theme"]) => {
    setTheme(newTheme);
  };
  return (
    <ThemeContext.Provider value={{ theme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextConstructor;
