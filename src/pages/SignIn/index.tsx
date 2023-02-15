import React from "react";
import SignIn from "./components";

function SignInLayout() {
  return (
    <SignIn>
      <SignIn.Headline />
      <SignIn.Form />
      <SignIn.SignUpLink />
    </SignIn>
  );
}

export default SignInLayout;
