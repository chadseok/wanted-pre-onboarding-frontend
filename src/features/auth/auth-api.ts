import axiosInstance from "@/services/axios";
import { UserInput } from "./form-types";

export const signInApi = (userInput: UserInput) => {
  return axiosInstance.post("/auth/signin", userInput);
};

export const signUpApi = (userInput: UserInput) => {
  return axiosInstance.post("/auth/signup", userInput);
};
