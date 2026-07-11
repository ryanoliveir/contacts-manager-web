interface InputProps {
  value?: string;
  placeholder: string;
  type: string;
  name: string;
  ref?: React.Ref<HTMLInputElement>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

function Input({
  value,
  placeholder,
  type,
  name,
  ref,
  onChange,
  onBlur,
}: InputProps) {
  return (
    <input
      className="bg-background-secondary border border-border-primary text-medium h-10 p-3 rounded-lg placeholder:text-content-placeholder placeholder:text-medium hover:border-content-heading focus:border-accent-brand outline-none text-content-body"
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
