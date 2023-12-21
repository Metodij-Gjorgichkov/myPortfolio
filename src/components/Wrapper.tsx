import { ThemeContext } from "@/context/themeContextConstructor";
import React, { useContext } from "react";

interface Props {
  children: React.ReactNode;
}

const Wrapper = ({ children }: Props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        background: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
