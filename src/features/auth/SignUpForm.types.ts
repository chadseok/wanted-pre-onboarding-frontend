export type SignUpUserInput = {
  email: string;
  password: string;
};

export type SignUpAlertMsg = {
  emailError: string;
  passwordError: string;
  signUpError: string | null;
};

export type SignUpErrorResponse = {
  error: string;
  statusCode: number;
  message: string;
};
