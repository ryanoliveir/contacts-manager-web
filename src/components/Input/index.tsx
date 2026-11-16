import { cn } from "../../libs/cn";

interface InputProps {
  value?: string;
  placeholder: string;
  type: string;
  name: string;
  ref?: React.Ref<HTMLInputElement>;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

function Input({
  value,
  placeholder,
  type,
  name,
  ref,
  className,
  onChange,
  onBlur,
}: InputProps) {
  return (
    <input
      className={cn(
        "bg-background-secondary border border-border-primary text-medium font-sans h-10 p-3 rounded-lg placeholder:text-content-placeholder placeholder:text-medium hover:border-content-heading focus:border-accent-brand outline-none text-content-body",
        className,
      )}
      value={value}
      type={type}
      name={name}
      ref={ref}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
}

export default Input;
