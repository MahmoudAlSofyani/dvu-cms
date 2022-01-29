import axios from "axios";

import { getSession } from "next-auth/react";

const session = await getSession();

const headers = {
  Authorization: `Bearer ${session?.user.accessToken}`,
};

export const getAllRoles = async () => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/roles`, { headers });
};
