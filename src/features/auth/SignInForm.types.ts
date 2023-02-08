export type SignInUserInput = {
  email: string;
  password: string;
};

export type SignInAlertMsg = {
  emailError: string;
  passwordError: string;
  signInError: string | null;
};

export type SignInSuccessResponse = {
  access_token: string;
};

export type SignInErrorResponse = {
  error: string;
  statusCode: number;
  message: string;
};
