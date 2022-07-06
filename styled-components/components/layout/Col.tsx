import styled, { css } from "styled-components";
import { devices } from "@/styled-components/responsive";

const Col = styled.div`
  margin: 10px;
  float: left;
  ${(props) => geColWidth(props)}
`;

const geColWidth = (props) => {
  let width = (100 / 12) * props.span;
  let output = `
    width: calc(${width}% - 20px);
  `;

  ["sm", "md", "lg", "xl"].forEach((size) => {
    if (props[size]) {
      width = (100 / 12) * props[size];
      output += `
        @media ${devices[size]} {
          width: calc(${width}% - 20px);
        }
      `;
    }
  });

  return output;
};

export default Col;
