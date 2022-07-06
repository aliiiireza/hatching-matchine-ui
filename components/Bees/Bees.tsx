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

const Bees = () => {
  const items = [{ name: "Alireza", image: "" }];

  return (
    <>
      <Wrapper>
        <Header>
          <Title>HATCHED ITEMS</Title>
        </Header>
        <CardsInnerWrapper>
          <Row>
            {items.map((item) => (
              <Col sm={6} md={4} span={3}>
                <Card {...item} />
              </Col>
            ))}
          </Row>
        </CardsInnerWrapper>
      </Wrapper>
    </>
  );
};
export default Bees;
