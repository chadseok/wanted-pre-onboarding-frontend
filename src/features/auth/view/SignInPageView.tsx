import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./SignInPageView.styles";
import { SignInForm } from "@/features";

function SignInPageView() {
  return (
    <div css={styles.layout}>
      <div css={styles.signInBox}>
        <h1 css={styles.signInHeadline}>로그인</h1>
        <SignInForm />
        <div css={styles.signupLinkBox}>
          <span>아직 계정이 없나요? </span>
          <Link to="/signup">회원가입하기</Link>
        </div>
      </div>
    </div>
  );
}

export default SignInPageView;
