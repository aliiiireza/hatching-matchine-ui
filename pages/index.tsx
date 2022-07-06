import type { NextPage } from "next";
import { Row, Col } from "@/styled-components/components/layout";
import Header from "@/components/Header";
import Eggs from "@/components/Eggs/Eggs";
import Bees from "@/components/Bees/Bees";

const Home: NextPage = () => {
  return (
    <div className="app">
      <Header />
      <Row>
        <Col sm={12} span={6}>
          <Eggs />
        </Col>
        <Col sm={12} span={6}>
          <Bees />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
