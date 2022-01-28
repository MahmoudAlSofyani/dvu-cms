import axios from "axios";
import { getSession } from "next-auth/react";

const session = await getSession();

const headers = {
  Authorization: `Bearer ${session?.user.accessToken}`,
};

export const createEvent = async (payload) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/events`,
    getFormData(payload),
    {
      headers: {
        ...headers,
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

export const updateEventByUid = async (uid, payload) => {
  if (typeof payload.poster === "object") {
    return axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/events/${uid}`,
      getFormData(payload),
      {
        headers: {
          ...headers,
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }

  return axios.patch(
    `${process.env.NEXT_PUBLIC_API_URL}/events/${uid}`,
    payload,
    { headers }
  );
};

export const bulkDeleteEvents = async (payload) => {
  return axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/events`, payload, {
    headers,
  });
};

export const searchEvents = async (payload) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/events/search`,
    payload,
    { headers }
  );
};

export const getEventByUid = async (uid) => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/events/${uid}`, {
    headers,
  });
};

export const publishUnpublishEvent = async (uid) => {
  return axios.patch(
    `${process.env.NEXT_PUBLIC_API_URL}/events/visibility/${uid}`,
    null,
    {
      headers,
    }
  );
};

const getFormData = (payload) =>
  Object.keys(payload).reduce((fD, key) => {
    if (key === "poster") key = "file";

    fD.append(key, payload[key === "file" ? "poster" : key]);
    return fD;
  }, new FormData());
