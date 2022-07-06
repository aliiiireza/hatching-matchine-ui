import type { NextPage } from "next";
import { Row, Col } from "@/styled-components/components/layout";
import Header from "@/components/Header";
import Eggs from "@/components/Eggs/Eggs";
import HatchedItem from "@/components/HatchedItem/HatchedItem";
import { useState } from "react";

const Home: NextPage = () => {
  const [hatchedItem, setHatchedItem] = useState(null);
  return (
    <div className="app">
      <Header />
      <Row>
        <Col sm={12} span={6}>
          <Eggs onHatch={(item) => setHatchedItem(item)} />
        </Col>
        <Col sm={12} span={6}>
          <HatchedItem item={hatchedItem} />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
