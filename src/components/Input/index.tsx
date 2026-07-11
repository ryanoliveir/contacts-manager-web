interface InputProps {
  value?: string;
  placeholder: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ value, placeholder, type, onChange }: InputProps) {
  return (
    <input
      className="bg-background-secondary border border-border-primary text-medium h-10 p-3 rounded-lg placeholder:text-content-placeholder placeholder:text-medium hover:border-content-heading focus:border-accent-brand outline-none text-content-body"
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default Input;
