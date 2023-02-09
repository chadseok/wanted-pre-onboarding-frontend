import { css } from "@emotion/react";
import color from "@/styles/color";

export const itemBox = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  margin-bottom: 0.25rem;
  border-radius: 0.25rem;
  background-color: white;

  :hover {
    background-color: ${color.slate50};
  }
`;

export const itemBoxChecked = css`
  ${itemBox}
  background-color: ${color.slate50};
  span {
    text-decoration: line-through;
    color: ${color.slate300};
  }
`;

export const checkbox = css`
  width: 1.125rem;
  height: 1.125rem;
  margin-right: 1rem;
  vertical-align: -0.25rem;
`;

export const content = css`
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

export const editInput = css`
  background-color: transparent;
  border: none;
  font-size: 1.125rem;
  width: 24rem;
  height: 1.75rem;
  padding: 0;
  :focus {
    outline: none;
  }
`;

export const btnBox = css`
  button {
    vertical-align: -0.25rem;
    color: ${color.slate500};
    :hover {
      color: black;
    }
  }
`;
