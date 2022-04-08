import isServer from "@/utils/isServer";

const getItem = (key: string) => {
  if (isServer()) return null;

  const data = localStorage.getItem(key);

  if (data === null) return null;

  try {
    return JSON.parse(data);
  } catch (error) {
    return data;
  }
};

const setItem = (key: string, value: any) => {
  if (isServer()) return;

  localStorage.setItem(key, JSON.stringify(value));
};

const removeItem = (key: string) => {
  if (isServer()) return;
  localStorage.removeItem(key);
};

const clear = () => {
  if (isServer()) return;
  localStorage.clear();
};

export const localStorageService = {
  getItem,
  setItem,
  removeItem,
  clear,
};
