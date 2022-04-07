import { ReactNode, FC } from "react";

type ColorVariant = "teal" | "emerald" | "cyan";

type Props = {
  title: string;
  variant: ColorVariant;
  children: ReactNode;
  footer: string;
};

export const colorMap = {
  teal: "bg-[#2e91a3]",
  emerald: "bg-[#498c84]",
  cyan: "bg-[#4fccdc]",
};

export default function InfoCard({ title, variant, children, footer }: Props) {
  return (
    <div
      className={`sm:flex-1 w-full p-4 rounded-xl shadow-md shadow-slate-400 text-[#e2eae7] ${colorMap[variant]} `}
    >
      <div className="flex flex-row justify-between mb-4">
        <h3 className="text-lg">{title}</h3>
        <div>mode</div>
      </div>
      <div className="text-white text-3xl mb-12">{children}</div>
      <div className="text-sm">{footer}</div>
    </div>
  );
}
