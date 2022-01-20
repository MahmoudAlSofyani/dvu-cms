import axios from "axios";

export const searchUser = async () => {
  return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/search`);
};

export const getUserByUid = async (uid) => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/${uid}`);
};

export const updateUserByUid = async (uid, payload) => {
  return axios.patch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${uid}`,
    payload
  );
};

export const updateUsersStatus = async (status, payload) => {
  return axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/users/${status}`);
};

export const createUser = async (payload) => {
  return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users`);
};
