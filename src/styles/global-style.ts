import { css } from "@emotion/react";
import resetCSS from "./reset-css";

const globalStyle = css`
  ${resetCSS}

  button {
    cursor: pointer;
  }

  button:disabled {
    cursor: default;
  }
`;

export default globalStyle;
