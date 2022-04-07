import "../styles/globals.css";
import type { AppProps } from "next/app";
import { StatsProvider } from "@/contexts/podStatsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StatsProvider>
      <Component {...pageProps} />;
    </StatsProvider>
  );
}

export default MyApp;
