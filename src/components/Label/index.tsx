import type { ReactNode } from "react";

interface LabelProps {
  children: ReactNode;
}

function Label({ children }: LabelProps) {
  return (
    <label className="text-label-medium leading-5.5 font-medium" htmlFor="">
      {children}
    </label>
  );
}

export default Label;
