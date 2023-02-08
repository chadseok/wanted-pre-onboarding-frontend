import { css } from "@emotion/react";

export const formBox = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`;

export const inputBox = css``;

export const label = css`
  color: gray;
  font-size: 0.75rem;
  line-height: 1rem;
`;

export const input = css`
  width: 100%;
  padding: 1rem 0.5rem;
  border: 1px solid #eaeaea;
  height: 3rem;
`;

export const alertLine = css`
  color: rgb(234 179 8);
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 500;
  margin-top: 0.5rem;
`;

export const alertBox = css`
  border: 1px solid rgb(251 113 133);
  background-color: rgb(244 63 94);
  padding: 0.75rem 1rem;
  font-weight: bold;
  font-size: 0.75rem; /* 12px */
  line-height: 1rem; /* 16px */
  color: white;
`;

export const submitBtn = css`
  height: 2.5rem;
  background-color: #252839;
  border-radius: 0.5rem;
  color: white;

  :disabled {
    opacity: 0.3;
  }
`;
