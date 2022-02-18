import axios from "axios";

export const getMemberStatistics = (token) => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/members`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getEventStatistics = (token) => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/events`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAdvertisementsStatistics = (token) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/dashboard/advertisements`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
