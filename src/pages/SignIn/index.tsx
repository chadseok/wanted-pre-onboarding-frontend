import React from "react";
import { Link, Navigate } from "react-router-dom";
import * as styles from "./styles";
import { SignInForm } from "@/features";
import STORAGE from "@/constants/storage";

function SignIn() {
  const token = localStorage.getItem(STORAGE.authToken);
  if (token) return <Navigate replace to="/todo" />;

  return (
    <div css={styles.layout}>
      <div css={styles.mainBox}>
        <h1 css={styles.headline}>로그인</h1>
        <SignInForm />
        <div css={styles.linkBox}>
          <span>아직 계정이 없나요? </span>
          <Link to="/signup">회원가입하기</Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
