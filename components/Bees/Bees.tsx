import { Row, Col } from "@/styled-components/components/layout";
import { Card } from "@/components/Card/Card";
import { CardsInnerWrapper, Wrapper, Header, Title } from "@/components/Cards";

const Bees = () => {
  const items = [{ id: 1, name: "Alireza", image: "" }];
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
                <Card item={item} />
              </Col>
            ))}
          </Row>
        </CardsInnerWrapper>
      </Wrapper>
    </>
  );
};
export default Bees;
