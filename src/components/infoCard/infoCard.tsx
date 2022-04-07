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
      className={`p-4 rounded-xl shadow-md shadow-slate-400 w-1/3 text-[#e2eae7] ${colorMap[variant]} `}
    >
      <div className="flex flex-row justify-between mb-4">
        <div className="text-lg">{title}</div>
        <div>mode</div>
      </div>
      <div className="text-white text-3xl mb-12">{children}</div>
      <div className="text-sm">{footer}</div>
    </div>
  );
}
