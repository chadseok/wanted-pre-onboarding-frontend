export type UserInput = {
  email: string;
  password: string;
};
export type BaseAlertMsg = {
  emailError: string;
  passwordError: string;
};
export type SignUpAlertMsg = BaseAlertMsg & {
  signUpError: string | null;
};

export type SignInAlertMsg = BaseAlertMsg & {
  signInError: string | null;
};

export type SignInSuccessResponse = {
  access_token: string;
};

export type ServerErrorResponse = {
  error: string;
  statusCode: number;
  message: string;
};
