import styled from "styled-components";
import { List, ListItem } from "@/styled-components/components/display/List";
import Button from "@/components/Button/Button";

interface TraitCategoryFilter {
  value: string;
  handleSelect: Function;
  options: object[];
}

const CategoryList = styled(List)`
  height: calc(100vh - 400px);
`;

const TraitCategoryFilter = ({
  value,
  handleSelect,
  options,
}: TraitCategoryFilter) => {
  return (
    <CategoryList>
      {options.map(({ label, key }: any) => (
        <ListItem key={key}>
          <Button
            label={label}
            textTransform="capitalize"
            {...(value !== key ? { type: "secondary" } : { color: "#4513D2" })}
            fullWidth
            onClick={() => handleSelect(key)}
          />
        </ListItem>
      ))}
    </CategoryList>
  );
};

export default TraitCategoryFilter;
