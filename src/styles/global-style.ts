import { css } from "@emotion/react";
import resetCSS from "./reset-css";

const globalStyle = css`
  ${resetCSS}

  button {
    cursor: pointer;
    background-color: none;
    border: none;
  }

  button:disabled {
    cursor: default;
  }
`;

export default globalStyle;
