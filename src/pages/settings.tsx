import { ChangeEventHandler } from "react";
import Dashboard from "@/layouts/dashboard";
import { useConfig } from "@/hooks/useConfig";

export default function Settings() {
  const { username, setUsername } = useConfig();

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setUsername(event.target.value);
  };

  return (
    <Dashboard>
      <div className="pt-4">
        <label htmlFor="username">Change your name:</label>
        <input
          type="text"
          name="username"
          id="username"
          className="block my-4 px-4 py-2 border-4 rounded-md outline-2 outline-teal-600 dark:bg-slate-200 dark:text-slate-800"
          value={username}
          onChange={onChangeHandler}
        />
      </div>
    </Dashboard>
  );
}
