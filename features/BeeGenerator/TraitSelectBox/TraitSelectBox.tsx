import styled from "styled-components";
import { CardsInnerWrapper, Wrapper, Header, Title } from "@/components/Cards";
import RadioButton from "@/components/RadioButton/RadioButton";

interface TraitCategoryFilter {
  value: string;
  handleSelect: Function;
  options: object[];
}

const TraitWrapper = styled(Wrapper)`
  padding: 15px 30px 30px 30px;
  margin-left: 10px;
  height: calc(100vh - 400px);
`;

export default function TraitSelectBox({
  value,
  handleSelect,
  options,
}: TraitCategoryFilter) {
  return (
    <TraitWrapper type="warning">
      <Header>
        <Title color="#FF4B0E" fontSize="20px">
          SELECT TRAITS
        </Title>
      </Header>
      <CardsInnerWrapper type="warning">
        <RadioButton
          value={value}
          options={options}
          handleSelect={handleSelect}
        />
      </CardsInnerWrapper>
    </TraitWrapper>
  );
}
