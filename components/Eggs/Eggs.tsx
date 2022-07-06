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

const Eggs = ({ onHatch }: { onHatch: any }) => {
  const items = [
    {
      id: 1,
      name: "Alireza",
      image:
        "https://storage.googleapis.com/fractal-launchpad-public-assets/honeyland/assets/Genesis_Bee_Egg.png",
    },
    {
      id: 2,
      name: "Mohammad",
      image:
        "https://storage.googleapis.com/fractal-launchpad-public-assets/honeyland/assets/Genesis_Bee_Egg.png",
    },
    {
      id: 3,
      name: "Yousef",
      image:
        "https://storage.googleapis.com/fractal-launchpad-public-assets/honeyland/assets/Genesis_Bee_Egg.png",
    },
    {
      id: 4,
      name: "Hassan",
      image:
        "https://storage.googleapis.com/fractal-launchpad-public-assets/honeyland/assets/Genesis_Bee_Egg.png",
    },
    {
      id: 5,
      name: "Nima",
      image:
        "https://storage.googleapis.com/fractal-launchpad-public-assets/honeyland/assets/Genesis_Bee_Egg.png",
    },
  ];

  const [isHatching, setIsHatching] = useState(false);

  const [selectedEgg, setSelectedEgg] = useState(null);
  const onEggClick = (egg) =>
    !isHatching &&
    setSelectedEgg(selectedEgg && selectedEgg.id === egg.id ? null : egg);

  const onHatchClick = () => {
    if (!selectedEgg)
      notify({ type: "error", message: "Please select an egg" });

    setIsHatching(true);
    onHatch({ ...selectedEgg, isHatched: false });
    setTimeout(() => {
      notify({ type: "success", message: "The egg hatched successfully" });
      onHatch({ ...selectedEgg, isHatched: true });
      setIsHatching(false);
    }, 2000);
  };

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
                <Card
                  item={item}
                  onCardClick={onEggClick}
                  selected={selectedEgg && selectedEgg.id === item.id}
                />
              </Col>
            ))}
          </Row>
        </CardsInnerWrapper>
        <Footer>
          <Button
            type="warning"
            onClick={onHatchClick}
            disabled={isHatching}
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
