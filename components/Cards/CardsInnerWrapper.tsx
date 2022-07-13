import styled, { css } from "styled-components";

interface CardsInnerWrapperProps {
  type: "secondary" | "warning";
}

export const CardsInnerWrapper = styled.div<CardsInnerWrapperProps>`
  text-align: center;
  border-radius: 25px;
  height: 100%;
  padding: 10px;
  overflow-x: hidden;
  overflow-y: auto;
  ${(props) => types[props.type || "secondary"]}
`;

const types = {
  secondary: css`
    background-color: #623ce775;
    box-shadow: 0px 0px 20px 0px #26185c75 inset;
  `,
  warning: css`
    background: rgba(252, 212, 59, 0.5);
    box-shadow: inset 0px 0px 20px #d67f02;
  `,
};
