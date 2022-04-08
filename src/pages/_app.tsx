import "../styles/globals.css";
import type { AppProps } from "next/app";
import { StatsProvider } from "@/contexts/podStatsContext";
import { ConfigProvider } from "@/contexts/configContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider>
      <StatsProvider>
        <Component {...pageProps} />
      </StatsProvider>
    </ConfigProvider>
  );
}

export default MyApp;
