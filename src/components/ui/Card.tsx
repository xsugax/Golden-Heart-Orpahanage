import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className,
  hover = false,
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl border border-slate-100 p-6 shadow-sm",
        hover && "hover:shadow-md hover:border-amber-200 transition-all duration-200",
        className
      )}
    >
      {children}
    </div>
  );
}
