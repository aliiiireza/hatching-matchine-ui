import { IoIosSearch } from "react-icons/io";
import { SearchWrapper, Input } from "./Search.styled";

interface SearchProps {
  label: string;
}

export default function Search({ label }: SearchProps) {
  return (
    <SearchWrapper>
      <Input type="text" placeholder={label} />
      <IoIosSearch color="#CD6116" size="28" />
    </SearchWrapper>
  );
}
