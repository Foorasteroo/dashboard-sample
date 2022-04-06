import { ChangeEventHandler, useState } from "react";
import styled from "@emotion/styled";

export default function Header() {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setDarkModeEnabled(e.target.checked);
  };

  return (
    <header className="flex flex-row justify-between items-center py-4">
      <h1 className="text-4xl">Hello John</h1>
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
