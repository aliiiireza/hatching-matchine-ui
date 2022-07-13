import styled, { css } from "styled-components";

interface WrapperProps {
  type: "secondary" | "warning";
}

export const Wrapper = styled.div<WrapperProps>`
  padding: 15px;
  height: calc(100vh - 250px);
  border-radius: 40px;
  backdrop-filter: blur(25px);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  text-align: center;
  justify-content: space-between;
  ${(props) => types[props.type || "secondary"]}
`;

const types = {
  secondary: css`
    background-image: linear-gradient(
      154.62deg,
      rgba(255, 253, 253, 0.7) 3.67%,
      rgba(255, 250, 250, 0.1) 98.21%
    );
    box-shadow: 0px 4px 26px -1px #623ce775;
  `,
  warning: css`
    background: linear-gradient(
      154.62deg,
      rgba(255, 253, 253, 0.7) 3.67%,
      rgba(255, 250, 250, 0.1) 98.21%
    );
    box-shadow: 0px 4px 26px -1px #d67f02;
  `,
};
