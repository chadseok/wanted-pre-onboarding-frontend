import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./styles";
import { SignInForm } from "@/features";

function SignIn() {
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
