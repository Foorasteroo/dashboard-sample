import {
  FC,
  createContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { localStorageService } from "@/services/localStorageService";

interface ConfigState {
  username: string;
  darkModeEnabled: boolean;
  setUsername: Dispatch<SetStateAction<string>>;
  setDarkModeEnabled: Dispatch<SetStateAction<boolean>>;
}

export const ConfigContext = createContext<ConfigState>({} as ConfigState);

const { setItem, getItem } = localStorageService;

const DEFAULT_USERNAME = "John";
const DEFAULT_DARK_MODE = false;

export const ConfigProvider: FC = ({ children }) => {
  const [username, setUsername] = useState(DEFAULT_USERNAME);
  const [darkModeEnabled, setDarkModeEnabled] = useState(DEFAULT_DARK_MODE);

  useEffect(function loadConfig() {
    const localUsername = getItem("username");
    const localDarkModeEnabled = getItem("darkModeEnabled");

    if (localUsername && localUsername !== DEFAULT_USERNAME) {
      setUsername(localUsername);
    }
    if (localDarkModeEnabled && localDarkModeEnabled !== DEFAULT_DARK_MODE) {
      setDarkModeEnabled(localDarkModeEnabled);
    }
  }, []);

  useEffect(
    function saveConfig() {
      setItem("username", username);
      setItem("darkModeEnabled", darkModeEnabled);
    },
    [username, darkModeEnabled]
  );

  const configState: ConfigState = {
    username,
    setUsername,
    darkModeEnabled,
    setDarkModeEnabled,
  };

  return (
    <ConfigContext.Provider value={configState}>
      {children}
    </ConfigContext.Provider>
  );
};
