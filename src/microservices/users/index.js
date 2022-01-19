import axios from "axios";

export const searchUser = async () => {
  return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/search`);
};
