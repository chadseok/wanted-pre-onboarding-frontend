import { css } from "@emotion/react";
import color from "@/styles/color";

export const formBox = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`;

export const inputBox = css``;

export const input = css`
  width: 100%;
  padding: 1rem 0.5rem;
  border: 1px solid ${color.slate200};
  height: 3rem;
`;

export const alertLine = css`
  color: ${color.caution};
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 500;
  margin-top: 0.5rem;
`;

export const alertBox = css`
  background-color: ${color.warning};
  padding: 0.75rem 1rem;
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 1rem;
  color: white;
`;

export const submitBtn = css`
  height: 2.5rem;
  background-color: ${color.primary};
  border-radius: 0.5rem;
  color: white;

  :disabled {
    opacity: 0.3;
  }
`;
