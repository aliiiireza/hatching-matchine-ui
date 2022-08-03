import { useState } from "react";
import { Card } from "@/components/Card/Card";
import {
  CardsInnerWrapper,
  SwiperWrapper,
  SwiperArrowLeft,
  SwiperArrowRight,
  Wrapper,
  Header,
  Title,
} from "@/components/Cards";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import next from "next";

const Eggs = ({ onSelect }: { onSelect: any }) => {
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

  const onEggClick = (egg) => {
    if (!isHatching) {
      setSelectedEgg(selectedEgg && selectedEgg.id === egg.id ? null : egg);
      onSelect(egg);
    }
  };

  return (
    <>
      <Wrapper>
        <Header>
          <Title>YOUR EGGS LIST</Title>
        </Header>
        <CardsInnerWrapper>
          <SwiperWrapper>
            <SwiperArrowLeft src="/arrow_left.png" />
            <Swiper
              slidesPerView={"auto"}
              centeredSlides={false}
              spaceBetween={20}
              className="mySwiper"
            >
              {items.map((item) => (
                <SwiperSlide style={{ width: "30%" }}>
                  <Card
                    item={item}
                    onCardClick={onEggClick}
                    selected={selectedEgg && selectedEgg.id === item.id}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <SwiperArrowRight src="/arrow_right.png" />
          </SwiperWrapper>
        </CardsInnerWrapper>
      </Wrapper>
    </>
  );
};
export default Eggs;
