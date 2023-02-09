import { css } from "@emotion/react";
import color from "@/styles/color";

export const mainBox = css`
  background-color: white;
  width: 24rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  border-radius: 0.375rem;
  overflow: hidden;
`;

export const headline = css`
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: white;
  padding: 1rem;
  background-color: ${color.primary};
`;

export const linkBox = css`
  text-align: center;
  font-size: 0.75rem;
  line-height: 1rem;
  margin-bottom: 1rem;
`;

export const layout = css`
  display: flex;
  background-color: ${color.slate50};
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
