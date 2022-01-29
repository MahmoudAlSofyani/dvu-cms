import axios from "axios";
import { getSession } from "next-auth/react";

const session = await getSession();

const headers = {
  Authorization: `Bearer ${session?.user.accessToken}`,
};

export const searchUser = async (payload) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/users/search`,
    payload,
    {
      headers,
    }
  );
};

export const getUserByUid = async (uid) => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/${uid}`, {
    headers,
  });
};

export const updateUserByUid = async (uid, payload) => {
  return axios.patch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${uid}`,
    payload,
    { headers }
  );
};

export const updateUsersStatus = async (status, payload) => {
  return axios.patch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/status/${status}`,
    payload,
    {
      headers,
    }
  );
};
