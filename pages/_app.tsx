import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { FavoritesProvider } from "@/context/FavoritesContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FavoritesProvider>
      <div className="p-8 bg-gray-100 min-h-screen">
        <Component {...pageProps} />
      </div>
    </FavoritesProvider>
  );
}
