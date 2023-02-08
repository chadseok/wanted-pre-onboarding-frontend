import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./SignUpView.styles";
import { SignUpForm } from "@/features";

function SignInView() {
  return (
    <div css={styles.layout}>
      <div css={styles.signUpBox}>
        <h1 css={styles.signUpHeadline}>회원가입</h1>
        <SignUpForm />
        <div css={styles.signInLinkBox}>
          <span>이미 계정이 있나요?</span>
          <Link to="/signin">로그인</Link>
        </div>
      </div>
    </div>
  );
}

export default SignInView;
