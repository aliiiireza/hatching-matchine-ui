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

const Eggs = () => {
  const items = [
    { name: "Alireza", image: "" },
    { name: "Mohammad", image: "" },
    { name: "Yousef", image: "" },
    { name: "Hassan", image: "" },
    { name: "Nima", image: "" },
  ];

  return (
    <>
      <Wrapper>
        <Header>
          <Title>SELECT AN EGG TO HATCH</Title>
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
        <Footer>
          <Button type="warning">HATCH</Button>
        </Footer>
      </Wrapper>
    </>
  );
};
export default Eggs;
