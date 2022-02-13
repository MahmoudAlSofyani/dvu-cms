import axios from "axios";

export const searchUser = async (token, payload) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/users/search`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getUserByUid = async (token, uid) => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/${uid}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateUserByUid = async (token, uid, payload) => {
  return axios.patch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${uid}`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const updateUsersStatus = async (token, status, payload) => {
  return axios.patch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/status/${status}`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
