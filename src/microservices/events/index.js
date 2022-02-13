import axios from "axios";
import { getFormData } from "../../utils/helpers";

export const createEvent = async (token, payload) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/events`,
    getFormData(payload),
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

export const updateEventByUid = async (token, uid, payload) => {
  if (typeof payload.poster === "object") {
    return axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/events/${uid}`,
      getFormData(payload),
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }

  return axios.patch(
    `${process.env.NEXT_PUBLIC_API_URL}/events/${uid}`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const bulkDeleteEvents = async (token, payload) => {
  return axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/events`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const searchEvents = async (token, payload) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/events/search`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getEventByUid = async (token, uid) => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/events/${uid}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const publishUnpublishEvent = async (token, uid) => {
  return axios.patch(
    `${process.env.NEXT_PUBLIC_API_URL}/events/visibility/${uid}`,
    null,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
