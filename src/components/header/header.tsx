import { ChangeEventHandler, useEffect, useState } from "react";
import Head from "next/head";
import { useConfig } from "@/hooks/useConfig";

export default function Header() {
  const { username, darkModeEnabled, setDarkModeEnabled } = useConfig();

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setDarkModeEnabled(e.target.checked);
  };

  const headerTitle = `Hello ${username}`;
  const description = `${username} welcome to your dashboard`;

  return (
    <header className="flex flex-col-reverse gap-4 sm:flex-row justify-between items-center py-4">
      <Head>
        <title>{headerTitle}</title>
        <meta name="description" content={description} />
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
