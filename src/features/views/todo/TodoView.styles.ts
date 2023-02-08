import { css } from "@emotion/react";

export const layout = css`
  display: flex;
  background-color: rgb(248 250 252);
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const contentBox = css`
  width: 36rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  border-radius: 0.375rem;
  overflow: hidden;
  background-color: rgb(241 245 249);
`;

export const headline = css`
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: white;
  padding: 1rem;
  background-color: #252839;
`;
