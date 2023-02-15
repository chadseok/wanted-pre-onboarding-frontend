import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./styles";
import { SignUpForm } from "@/features";

function SignUp(props: { children: React.ReactNode }) {
  return (
    <div css={styles.layout}>
      <div css={styles.mainBox}>{props.children}</div>
    </div>
  );
}

function Headline() {
  return <h1 css={styles.headline}>회원가입</h1>;
}

function SignInLink() {
  return (
    <div css={styles.linkBox}>
      <span>이미 계정이 있나요?</span>
      <Link to="/signin">로그인</Link>
    </div>
  );
}

SignUp.Headline = Headline;
SignUp.Form = SignUpForm;
SignUp.SignUpLink = SignInLink;

export default SignUp;
