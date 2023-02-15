import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./styles";
import { SignInForm } from "@/features";

function SignIn(props: { children: React.ReactNode }) {
  return (
    <div css={styles.layout}>
      <div css={styles.mainBox}>{props.children}</div>
    </div>
  );
}

function Headline() {
  return <h1 css={styles.headline}>로그인</h1>;
}

function SignUpLink() {
  return (
    <div css={styles.linkBox}>
      <span>아직 계정이 없나요? </span>
      <Link to="/signup">회원가입하기</Link>
    </div>
  );
}

SignIn.Headline = Headline;
SignIn.Form = SignInForm;
SignIn.SignUpLink = SignUpLink;

export default SignIn;
