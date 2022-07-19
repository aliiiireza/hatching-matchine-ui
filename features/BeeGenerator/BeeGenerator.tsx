import { useState } from "react";
import categories from "./categories.json";
import traitList from "./traits.json";

import { Row, Col } from "@/styled-components/components/layout";
import Button from "@/components/Button/Button";
import TraitCategoryFilter from "./TraitCategoryFilter/TraitCategoryFilter";
import TraitSelectBox from "./TraitSelectBox/TraitSelectBox";
import GeneratorBox from "./GeneratorBox/GeneratorBox";

const categoryList = Object.entries(categories).map(([key, value]) => ({
  label: value,
  key,
}));

export default function BeeGenerator() {
  const [category, setCategory] = useState("body");
  const [selectedTraits, setSelectedTraits] = useState({});
  const updateSelectedTraits = (value) => {
    setSelectedTraits({ ...selectedTraits, [category]: value });
  };
  const filteredTraits = traitList
    .filter((trait) => trait.category === category)
    .map((trait) => ({ key: trait.id, label: trait.name }));
  return (
    <Row>
      <Col sm={12} span={2}>
        <TraitCategoryFilter
          value={category}
          handleSelect={(val) => setCategory(val)}
          options={categoryList}
        />
      </Col>
      <Col sm={12} span={5}>
        <TraitSelectBox
          value={selectedTraits[category]}
          handleSelect={updateSelectedTraits}
          options={filteredTraits}
        />
      </Col>
      <Col sm={12} span={5}>
        <GeneratorBox />
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
