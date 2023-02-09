import { css } from "@emotion/react";
import color from "@/styles/color";

// formStyle
const wrapper = css`
  position: relative;
  padding: 1rem;
  border-bottom: 3px dotted ${color.slate300};
`;

const newTodo = css`
  border: none;
  background-color: ${color.slate300};
  border-radius: 0.25rem;
  width: 100%;
  height: 2.5rem;
  padding: 0.5rem 4rem 0.5rem 1rem;

  :focus {
    outline: none;
  }
`;

const submit = css`
  position: absolute;
  width: 3rem;
  height: 2.5rem;
  right: 1rem;
  background-color: ${color.slate400};
  border-radius: 0 0.5rem 0.5rem 0;
  padding: 0.5rem;

  :hover {
    background-color: ${color.slate500};
  }
`;

export const formStyles = {
  wrapper,
  newTodo,
  submit,
};

// itemStyle
const itemBox = css`
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

const itemBoxChecked = css`
  ${itemBox}
  background-color: ${color.slate50};
  span {
    text-decoration: line-through;
    color: ${color.slate300};
  }
`;

const checkbox = css`
  width: 1.125rem;
  height: 1.125rem;
  margin-right: 1rem;
  vertical-align: -0.25rem;
`;

const content = css`
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

const editInput = css`
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

const btnBox = css`
  button {
    vertical-align: -0.25rem;
    color: ${color.slate500};
    :hover {
      color: black;
    }
  }
`;

export const itemStyles = {
  itemBox,
  itemBoxChecked,
  checkbox,
  content,
  editInput,
  btnBox,
};

// listStyle
const listBox = css`
  height: 32rem;
  overflow: auto;
  padding: 1rem;
`;

export const listStyles = {
  listBox,
};
