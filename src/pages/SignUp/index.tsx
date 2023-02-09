import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./styles";
import { SignUpForm } from "@/features";

function SignUp() {
  return (
    <div css={styles.layout}>
      <div css={styles.mainBox}>
        <h1 css={styles.headline}>회원가입</h1>
        <SignUpForm />
        <div css={styles.linkBox}>
          <span>이미 계정이 있나요?</span>
          <Link to="/signin">로그인</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
