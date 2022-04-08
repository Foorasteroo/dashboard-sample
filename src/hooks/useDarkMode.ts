import { useEffect } from "react";
import { useConfig } from "@/hooks/useConfig";

export default function useDarkMode() {
  const { darkModeEnabled } = useConfig();
  useEffect(() => {
    if (darkModeEnabled) {
      document?.documentElement?.classList?.add("dark");
    } else {
      document?.documentElement?.classList?.remove("dark");
    }
  }, [darkModeEnabled]);
}
