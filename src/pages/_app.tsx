import ThemeContextConstructor from "@/context/themeContextConstructor";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextConstructor>
      <Component {...pageProps} />
    </ThemeContextConstructor>
  );
}
