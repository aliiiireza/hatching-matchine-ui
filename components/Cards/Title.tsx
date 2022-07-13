import styled from "styled-components";

interface TitleProps {
  color: string;
  fontSize: string;
}

export const Title = styled.h1<TitleProps>`
  color: ${(props) => props.color || "#fff"};
  text-align: left;
  font-weight: medium;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.1rem")};
  letter-spacing: 1px;
  margin: 0;
  text-align: center;
  padding: 5px;
  border-radius: 22px;
  position: relative;
`;
