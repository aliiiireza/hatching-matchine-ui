import type { NextPage } from "next";
import { Row, Col } from "@/styled-components/components/layout";
import Header from "@/components/Header";
import EggsToHatch from "@/components/EggsToHatch/EggsToHatch";
import Hatch from "@/components/Hatch/Hatch";
import { useState } from "react";
import {
  HatchingMachineAnimation,
  HATCH_STATES,
} from "@/components/HatchingMachineAnimation/HatchingMachineAnimation";

const Home: NextPage = () => {
  const [hatchedItem, setHatchedItem] = useState(null);

  let hatchingState = HATCH_STATES.IDLE;

  if (hatchedItem)
    hatchingState = hatchedItem.isHatched
      ? HATCH_STATES.HATCHING
      : HATCH_STATES.HATCHED;

  return (
    <div className="app">
      <Header />
      <Row>
        <Col sm={12} span={6}>
          <Row>
            <Col sm={12} span={5}>
              <Hatch item={hatchedItem} />
            </Col>
            <Col sm={12} span={8}></Col>
            <Col sm={12} span={12}>
              <EggsToHatch onSelect={(item) => setHatchedItem(item)} />
            </Col>
          </Row>
        </Col>
        <Col sm={12} span={6}>
          <HatchingMachineAnimation state={hatchingState} />

          {/* <HatchedItem item={hatchedItem} /> */}
        </Col>
      </Row>
    </div>
  );
};

export default Home;
