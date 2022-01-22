import axios from "axios";

export const searchUser = async (token) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/search`, null, {
    headers,
  });
};

export const getUserByUid = async (uid, token) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/${uid}`, {
    headers,
  });
};

export const updateUserByUid = async (uid, payload, token) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios.patch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${uid}`,
    payload,
    { headers }
  );
};

export const updateUsersStatus = async (status, payload, token) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return axios.patch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/status/${status}`,
    payload,
    {
      headers,
    }
  );
};

export const createUser = async (payload) => {
  return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users`);
};
