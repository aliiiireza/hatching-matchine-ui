import styled, { css } from "styled-components";

export const OptionWrapper = styled.ul`
  padding: 0;
  margin: 20px;
  list-style-type: none;
  li {
    margin-bottom: 20px;
  }
`;

interface OptionProps {
  selected: string;
}

export const Option = styled.li<OptionProps>`
  position: relative;
  color: #545454;
  cursor: pointer;
  background: #ffffff;
  box-shadow: 0px 0px 8px rgb(0 0 0 / 25%);
  border-radius: 60px;
  font-size: 20px;
  padding: 15px 5px 15px 63px;
  text-align: left;
  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    left: 11px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(180deg, #ffffff 2.08%, #e9e9e9 100%);
    box-shadow: 0px 2px 2px rgb(0 0 0 / 25%);
    top: 50%;
    transform: translateY(-50%);
  }
  ${(props) =>
    props.selected &&
    css`
      &::before {
        content: "";
        position: absolute;
        z-index: 2;
        left: 18px;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: linear-gradient(180deg, #8763ed 0%, #3500cc 100%);
        box-shadow: 0px 2px 2px rgb(0 0 0 / 25%);
        top: 50%;
        transform: translateY(-50%);
      }
      color: #3500cc;
    `}
`;
