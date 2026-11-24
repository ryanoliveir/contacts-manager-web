import Input from "../Input";
import { Search } from "lucide-react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="relative w-full md:w-auto">
      <Search
        size={20}
        className="absolute left-5 right-4 top-5 -translate-1/2  text-contenct-muted pointer-events-none"
      />
      <Input
        placeholder="Pesquisar"
        type="text"
        name="search"
        className="pl-10 w-full"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
