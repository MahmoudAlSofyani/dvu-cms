import axios from "axios";

export const searchAdvertisements = async (token, payload) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/advertisements/search`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const bulkDeleteAdvertisements = async (token, payload) => {
  return axios.delete(
    `${process.env.NEXT_PUBLIC_API_URL}/advertisements`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const createAdvertisement = async (token, payload) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/advertisements`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getAdvertisementByUid = async (token, uid) => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/advertisements/${uid}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateAvdertisementByUid = async (token, uid, payload) => {
  return axios.patch(
    `${process.env.NEXT_PUBLIC_API_URL}/advertisements/${uid}`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const markAdvertisementAsSoldByUid = async (token, uid) => {
  return axios.patch(
    `${process.env.NEXT_PUBLIC_API_URL}/advertisements/sold/${uid}`,
    null,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const verifyUnverifyAdvertisement = async (token, uid) => {
  return axios.patch(
    `${process.env.NEXT_PUBLIC_API_URL}/advertisements/visibility/${uid}`,
    null,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
