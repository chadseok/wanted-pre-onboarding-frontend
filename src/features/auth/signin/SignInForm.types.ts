export type SignInUserInput = {
  email: string;
  password: string;
};

export type SignInAlertMsg = {
  emailError: string;
  passwordError: string;
  signInError: string | null;
};

export type SignInSuccessData = {
  access_token: string;
};

export type SignInFailureData = {
  error: string;
  statusCode: number;
  message: string;
};
