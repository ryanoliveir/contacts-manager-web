import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "submit" | "reset" | "button";
}

function Button({ type, children }: ButtonProps) {
  return (
    <button
      type={type}
      className="bg-accent-brand text-content-inverse h-11.5 rounded-xl text-label-medium font-bold"
    >
      {children}
    </button>
  );
}

export default Button;
