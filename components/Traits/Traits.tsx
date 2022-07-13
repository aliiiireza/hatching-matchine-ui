import styled from "styled-components";
import { useState } from "react";
import Button from "@/components/Button/Button";
import { Row, Col } from "@/styled-components/components/layout";
import { List, ListItem } from "@/styled-components/components/display/List";
import { CardsInnerWrapper, Wrapper, Header, Title } from "@/components/Cards";
import Search from "@/components/Search/Search";
import categories from "./categories.json";
import traitList from "./traits.json";
import TraitOptions from "./TraitOptions/TraitOptions";

const TraitWrapper = styled(Wrapper)`
  padding: 15px 30px 30px 30px;
  margin-left: 10px;
  height: calc(100vh - 400px);
`;
const GenerateWrapper = styled(Wrapper)`
  padding: 30px;
  height: calc(100vh - 400px);
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 25px;
  flex: 1 1 auto;
`;

const CatList = styled(List)`
  height: calc(100vh - 400px);
`;

const CategorySelection = ({ items, selectItem, category }) => {
  const categoryList = Object.entries(items).map(([key, value]) => ({
    label: value,
    key,
  }));
  return (
    <CatList>
      {categoryList.map(({ label, key }: any) => (
        <ListItem key={key}>
          <Button
            label={label}
            textTransform="capitalize"
            {...(category !== key
              ? { type: "secondary" }
              : { color: "#4513D2" })}
            fullWidth
            onClick={() => selectItem(key)}
          />
        </ListItem>
      ))}
    </CatList>
  );
};

export default function Traits() {
  const [category, setCategory] = useState("body");
  const [selectedTraits, setSelectedTraits] = useState({});
  const updateSelectedTraits = (value) => {
    setSelectedTraits({ ...selectedTraits, [category]: value });
  };
  const filteredTraits = traitList.filter(
    (trait) => trait.category === category
  );
  return (
    <Row>
      <Col sm={12} span={2}>
        <CategorySelection
          items={categories}
          selectItem={(val) => setCategory(val)}
          category={category}
        />
      </Col>
      <Col sm={12} span={5}>
        <TraitWrapper type="warning">
          <Header>
            <Title color="#FF4B0E" fontSize="20px">
              SELECT TRAITS
            </Title>
          </Header>
          <CardsInnerWrapper type="warning">
            <TraitOptions
              selected={selectedTraits[category]}
              options={filteredTraits}
              updateSelectedTraits={updateSelectedTraits}
            />
          </CardsInnerWrapper>
        </TraitWrapper>
      </Col>
      <Col sm={12} span={5}>
        <GenerateWrapper type="warning">
          <Header>
            <Search label="Enter Bee ID" />
          </Header>
          <Image src={traitList[0].image} width="100%" alt="" />
        </GenerateWrapper>
        <Row style={{ margin: "10px 25px" }}>
          <Col span={6}>
            <Button label="RESET" type="danger" fullWidth />
          </Col>
          <Col span={6}>
            <Button label="RANDOM" type="success" fullWidth />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
