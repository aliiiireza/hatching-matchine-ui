import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  font-weight: 100;
  text-transform: uppercase;
  display: inline-block;
  border: none;
  font-size: var(--v-header-button-font-size);
  text-shadow: 1px 2px 2px rgb(0 0 0 / 50%);
  box-shadow: 1px 2px 10px rgb(0 0 0 / 50%);
  border-radius: 109px;
  color: white;
  height: var(--v-header-button-height);
  padding: 0 1.4rem;
  line-height: var(--v-header-button-height);
  transition: background 0.15s ease-in;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.5);
  background: radial-gradient(
        106.52% 100% at 86.81% 100%,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, 0) 86.18%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    radial-gradient(
        55.45% 54.3% at 25.93% 25.27%,
        rgba(255, 255, 255, 0.679) 0%,
        rgba(255, 255, 255, 0) 69.79%,
        rgba(255, 255, 255, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    #00da9a;
  ${(props) => types[props.type]}
`;

const types = {
  primary: css`
    background: radial-gradient(
          106.52% 100% at 86.81% 100%,
          rgba(0, 0, 0, 0.1) 0%,
          rgba(0, 0, 0, 0) 86.18%
        )
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
      radial-gradient(
          55.45% 54.3% at 25.93% 25.27%,
          rgba(255, 255, 255, 0.679) 0%,
          rgba(255, 255, 255, 0) 69.79%,
          rgba(255, 255, 255, 0) 100%
        )
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
      #00da9a;
  `,
  warning: css`
    background: radial-gradient(
          106.52% 100% at 86.81% 100%,
          rgba(0, 0, 0, 0.1) 0%,
          rgba(0, 0, 0, 0) 86.18%
        )
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
      radial-gradient(
          55.45% 54.3% at 25.93% 25.27%,
          rgba(255, 255, 255, 0.679) 0%,
          rgba(255, 255, 255, 0) 69.79%,
          rgba(255, 255, 255, 0) 100%
        )
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
      #fec60d;
  `,
  danger: css`
    background: radial-gradient(
        106.52% 100% at 86.81% 100%,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, 0) 86.18%
      ),
      radial-gradient(
        55.45% 54.3% at 25.93% 25.27%,
        rgba(255, 255, 255, 0.679) 0%,
        rgba(255, 255, 255, 0) 69.79%,
        rgba(255, 255, 255, 0) 100%
      ),
      #ff4b0e;
  `,
};
