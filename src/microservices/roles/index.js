import axios from "axios";

export const getAllRoles = async (token) => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/roles`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
