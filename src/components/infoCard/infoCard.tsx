type ColorVariant = "teal" | "emerald" | "cyan";

type Props = {
  title: string;
  variant: ColorVariant;
  footer: string;
  value: number | string;
  mode: string;
  onModeChange: (mode: string) => void;
};

export const colorMap = {
  teal: "bg-[#2e91a3]",
  emerald: "bg-[#498c84]",
  cyan: "bg-[#4fccdc]",
};

export default function InfoCard(props: Props) {
  const { title, variant, value, footer, mode, onModeChange } = props;

  const onClick = () => {
    const newMode = mode === "week" ? "month" : "week";
    onModeChange(newMode);
  };

  return (
    <div
      className={`flex-auto w-full sm:w-max p-4 rounded-xl shadow-md shadow-slate-400 dark:shadow-slate-900 text-[#e2eae7] ${colorMap[variant]} `}
    >
      <div className="flex flex-row justify-between mb-4">
        <h3 className="text-lg">{title}</h3>
        <div onClick={onClick}>Last {mode}</div>
      </div>
      <div className="text-white text-3xl mb-12">{value}</div>
      <div className="text-sm">{footer}</div>
    </div>
  );
}
