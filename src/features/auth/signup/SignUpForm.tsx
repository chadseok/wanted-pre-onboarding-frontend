import React from "react";
import { useNavigate } from "react-router-dom";
import * as styles from "./SignUpForm.styles";
import type {
  SignUpUserInput,
  SignUpAlertMsg,
  SignInFailureData,
} from "./SignUpForm.types";
import validator from "@/utils/helpers/validator";
import ERROR_MSG from "@/utils/constants/error-msg";
import API_ENDPOINT from "@/utils/constants/api-endpoint";
import axiosInstance from "@/services/axios";
import { AxiosError } from "axios";

function SignUpForm() {
  const navigate = useNavigate();
  const [userInput, setUserInput] = React.useState<SignUpUserInput>({
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
      await axiosInstance.post(API_ENDPOINT.signup, userInput);
      navigate("/signin");
    } catch (error) {
      const err = error as AxiosError<SignInFailureData, SignUpUserInput>;
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
            placeholder="이메일"
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
            placeholder="비밀번호"
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
          회원가입
        </button>
      </form>
    </>
  );
}

export default SignUpForm;