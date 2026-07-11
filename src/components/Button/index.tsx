import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

function Button({ children }: ButtonProps) {
  return (
    <button className="bg-accent-brand text-content-inverse h-11.5 rounded-xl text-label-medium font-bold">
      {children}
    </button>
  );
}

export default Button;
