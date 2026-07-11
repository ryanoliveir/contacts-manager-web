import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps {
  value?: string;
  placeholder: string;
  type: string;
  name: string;
  ref?: React.Ref<HTMLInputElement>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

function PasswordInput({
  value,
  placeholder,
  name,
  ref,
  onChange,
  onBlur,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        className="bg-background-secondary w-full border border-border-primary text-medium h-10 p-3 rounded-lg placeholder:text-content-placeholder placeholder:text-medium hover:border-content-heading focus:border-accent-brand outline-none text-content-body"
        value={value}
        type={showPassword ? "text" : "password"}
        name={name}
        ref={ref}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />

      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-content-placeholder"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <Eye size={15} /> : <EyeOff size={15} />}
      </button>
    </div>
  );
}

export default PasswordInput;
