import { Row, Col } from "@/styled-components/components/layout";
import { CardsInnerWrapper, Wrapper, Header, Title } from "@/components/Cards";
import styled from "styled-components";
const Image = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 25px;
`;
const HatchedItem = ({ item }) => {
  return (
    <>
      <Wrapper>
        <Header>
          <Title>HATCHED ITEM</Title>
        </Header>
        <CardsInnerWrapper>
          <Row>
            <Col span={12}>
              {!item && (
                <Title>There is no egg inside the hatching machine</Title>
              )}
              {item && !item.isHatched && <Title>Hatching...</Title>}
              {item && item.isHatched && (
                <>
                  <Title>Egg Hatched</Title>
                  <Image src={item.image} width="100%" />
                  <Title>Name: {item.name}</Title>
                </>
              )}
            </Col>
          </Row>
        </CardsInnerWrapper>
      </Wrapper>
    </>
  );
};
export default HatchedItem;
