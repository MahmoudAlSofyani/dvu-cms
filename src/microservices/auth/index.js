import axios from "axios";

export const login = async (payload) => {
  return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, payload);
};

export const sendPasswordResetEmail = async (payload) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`,
    payload
  );
};
