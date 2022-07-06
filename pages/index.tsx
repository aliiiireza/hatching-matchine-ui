import type { NextPage } from "next";
import Header from "@/components/Header";
import NftList from "@/components/NftList";
import useTreasuryState from "@/hooks/useTreasuryState";
import { TREASURY_STATES } from "@/utils/enums";
import Heading from "@/components/Heading";
import Cards from "@/components/Cards/Cards";
import { Row, Col } from "@/styled-components/components/layout";
const Home: NextPage = () => {
  return (
    <div className="app">
      <Header />
      <Row>
        <Col sm={12} span={6}>
          <Cards />
        </Col>
        <Col sm={12} span={6}>
          <Cards />
        </Col>
      </Row>
      {/* <Cards /> */}
      {/* <div className="card-wrapper"> */}
      {/*<div className="card-wrapper-grid custom-scrollbar"> */}
      {/* {renderByTreasuryState()} */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default Home;
