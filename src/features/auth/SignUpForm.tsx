import React from "react";
import { useNavigate } from "react-router-dom";
import * as styles from "./form-styles";
import type {
  UserInput,
  SignUpAlertMsg,
  ServerErrorResponse,
} from "./form-types";
import validator from "@/helpers/validator";
import ERROR_MSG from "@/constants/error-msg";
import { signUpApi } from "./auth-api";
import { AxiosError } from "axios";

function SignUpForm() {
  const navigate = useNavigate();
  const [userInput, setUserInput] = React.useState<UserInput>({
    email: "",
    password: "",
  });
  const [alertMsg, setAlertMsg] = React.useState<SignUpAlertMsg>({
    emailError: "",
    passwordError: "",
    signUpError: null,
  });

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await signUpApi(userInput);
      navigate("/signin");
    } catch (error) {
      const err = error as AxiosError<ServerErrorResponse>;
      setAlertMsg({
        ...alertMsg,
        signUpError: err.response ? err.response.data.message : null,
      });
    }
  };

  const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    const isValidEmail = validator.checkEmail(newValue);

    setUserInput({ ...userInput, email: newValue });
    setAlertMsg({
      ...alertMsg,
      emailError:
        isValidEmail || newValue === "" ? "" : ERROR_MSG.notValidEmail,
    });
  };

  const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    const isValidPassword = validator.checkPassword(newValue);

    setUserInput({ ...userInput, password: newValue });
    setAlertMsg({
      ...alertMsg,
      passwordError:
        isValidPassword || newValue === "" ? "" : ERROR_MSG.notValidPassword,
    });
  };

  const isBtnDisabled = () => {
    return userInput.email === "" ||
      userInput.password === "" ||
      alertMsg.emailError !== "" ||
      alertMsg.passwordError !== ""
      ? true
      : false;
  };

  return (
    <>
      {alertMsg.signUpError && (
        <div css={styles.alertBox}>{alertMsg.signUpError}</div>
      )}
      <form css={styles.formBox} onSubmit={handleSignUp}>
        <div css={styles.inputBox}>
          <input
            data-testid="email-input"
            css={styles.input}
            type="email"
            placeholder="?????????"
            value={userInput.email}
            onChange={handleEmailInput}
          />
          <div css={styles.alertLine}>{alertMsg.emailError}</div>
        </div>
        <div css={styles.inputBox}>
          <input
            data-testid="password-input"
            css={styles.input}
            type="password"
            placeholder="????????????"
            value={userInput.password}
            onChange={handlePasswordInput}
          />
          <div css={styles.alertLine}>{alertMsg.passwordError}</div>
        </div>
        <button
          data-testid="signup-button"
          css={styles.submitBtn}
          type="submit"
          disabled={isBtnDisabled()}
        >
          ????????????
        </button>
      </form>
    </>
  );
}

export default SignUpForm;
