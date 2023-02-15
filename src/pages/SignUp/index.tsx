import React from "react";
import SignUp from "./components";

function SignUpLayout() {
  return (
    <SignUp>
      <SignUp.Headline />
      <SignUp.Form />
      <SignUp.SignUpLink />
    </SignUp>
  );
}

export default SignUpLayout;
