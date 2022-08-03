import styled from "styled-components";

export const SwiperWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SwiperArrow = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 5px;
`;

export const SwiperArrowLeft = styled(SwiperArrow)`
  margin-right: 15px;
`;

export const SwiperArrowRight = styled(SwiperArrow)`
  margin-left: 15px;
`;
