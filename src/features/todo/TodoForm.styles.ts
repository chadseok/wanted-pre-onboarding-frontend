import { css } from "@emotion/react";

export const formBox = css`
  position: relative;
  padding: 1rem;
  border-bottom: 3px dotted rgb(203 213 225);
`;

export const input = css`
  border: none;
  background-color: rgb(203 213 225);
  border-radius: 0.25rem;
  width: 100%;
  height: 2.5rem;
  padding: 0.5rem 4rem 0.5rem 1rem;

  :focus {
    outline: none;
  }
`;

export const submitBtn = css`
  position: absolute;
  width: 3rem;
  height: 2.5rem;
  right: 1rem;
  background-color: rgb(148 163 184);
  border-radius: 0 0.5rem 0.5rem 0;
  padding: 0.5rem;

  :hover {
    background-color: rgb(100 116 139);
  }
`;
