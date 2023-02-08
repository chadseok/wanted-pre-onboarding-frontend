import React from "react";
import { useNavigate } from "react-router-dom";
import type {
  SignInUserInput,
  SignInAlertMsg,
  SignInSuccessResponse,
  SignInErrorResponse,
} from "./SignInForm.types";
import * as styles from "./SignInForm.styles";
import validator from "@/utils/helpers/validator";
import ERROR_MSG from "@/utils/constants/error-msg";
import STORAGE from "@/utils/constants/storage";
import axiosInstance from "@/services/axios";
import { AxiosError } from "axios";

function SignInForm() {
  const navigate = useNavigate();
  const [userInput, setUserInput] = React.useState<SignInUserInput>({
    email: "",
    password: "",
  });
  const [alertMsg, setAlertMsg] = React.useState<SignInAlertMsg>({
    emailError: "",
    passwordError: "",
    signInError: null,
  });

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await axiosInstance.post<SignInSuccessResponse>(
        "/auth/signin",
        userInput
      );
      localStorage.setItem(STORAGE.authToken, res.data.access_token);
      navigate("/todo");
    } catch (error) {
      const err = error as AxiosError<SignInErrorResponse>;
      setAlertMsg({
        ...alertMsg,
        signInError: err.response ? err.response.data.message : null,
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
      {alertMsg.signInError && (
        <div css={styles.alertBox}>{alertMsg.signInError}</div>
      )}
      <form css={styles.formBox} onSubmit={handleLogin}>
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
          data-testid="signin-button"
          css={styles.submitBtn}
          type="submit"
          disabled={isBtnDisabled()}
        >
          이메일로 계속하기
        </button>
      </form>
    </>
  );
}

export default SignInForm;
