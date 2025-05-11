import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}
