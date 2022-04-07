import { ChangeEventHandler, useState } from "react";
import Head from "next/head";

export default function Header() {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setDarkModeEnabled(e.target.checked);
  };

  const headerTitle = "Hello John";

  return (
    <header className="flex flex-col-reverse gap-4 sm:flex-row justify-between items-center py-4">
      <Head>
        <title>{headerTitle}</title>
        <meta name="description" content="Welcome to your dashboard" />
      </Head>
      <h1 className="text-4xl">{headerTitle}</h1>
      <div>
        <label htmlFor="darkModeEnabled">
          Dark Mode {darkModeEnabled ? "🟢 " : "⚪️"}
          <input
            className="hidden"
            type="checkbox"
            name="darkModeEnabled"
            id="darkModeEnabled"
            onChange={onChange}
          />
        </label>
      </div>
    </header>
  );
}
