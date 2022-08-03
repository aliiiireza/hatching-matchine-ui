import { useState } from "react";
import { Row, Col } from "@/styled-components/components/layout";
import { Button } from "@/components/Button/Button";
import { Card } from "@/components/Card/Card";
import {
  CardsInnerWrapper,
  Wrapper,
  Header,
  Footer,
  Title,
} from "@/components/Cards";
import { notify } from "@/common/notify";

const Eggs = ({
  item,
  onHatchStart = () => {},
  onHatchEnd = () => {},
}: {
  item: any;
  onHatchStart?: any;
  onHatchEnd?: any;
}) => {
  const [isHatching, setIsHatching] = useState(false);

  const onHatchClick = () => {
    setIsHatching(true);
    onHatchStart();
    setTimeout(() => {
      notify({ type: "success", message: "The egg hatched successfully" });
      onHatchEnd();
      setIsHatching(false);
    }, 10000);
  };
  return (
    <>
      <Wrapper>
        <Header>
          <Title>
            SELECT AN EGG
            <br />
            TO HATCH
          </Title>
        </Header>
        <CardsInnerWrapper>
          <Row>
            <Col span={12}>
              {item && <Card item={item} />}
              {!item && (
                <Card
                  item={{ image: "/placeholder.jpg", name: "SELECT AN EGG" }}
                />
              )}
            </Col>
          </Row>
        </CardsInnerWrapper>
        <Footer>
          <Button
            type={!item || isHatching ? "disabled" : "warning"}
            onClick={item && !isHatching && onHatchClick}
            disabled={!item || isHatching}
            loading={isHatching}
          >
            HATCH
          </Button>
        </Footer>
      </Wrapper>
    </>
  );
};
export default Eggs;
