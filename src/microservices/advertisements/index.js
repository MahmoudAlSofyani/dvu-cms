import axios from "axios";

export const searchAdvertisements = async (payload) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/advertisements/search`,
    payload
  );
};

export const bulkDeleteAdvertisements = async (payload) => {
  return axios.delete(
    `${process.env.NEXT_PUBLIC_API_URL}/advertisements`,
    payload
  );
};

export const createAdvertisement = async (payload) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/advertisements`,
    payload
  );
};

export const getAdvertisementByUid = async (uid) => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/advertisements/${uid}`);
};

export const updateAvdertisementByUid = async (uid, payload) => {
  return axios.patch(
    `${process.env.NEXT_PUBLIC_API_URL}/advertisements/${uid}`,
    payload
  );
};

export const markAdvertisementAsSoldByUid = async (uid) => {
  return axios.patch(
    `${process.env.NEXT_PUBLIC_API_URL}/advertisements/sold/${uid}`
  );
};
