import axios from "axios";

import { getSession } from "next-auth/react";
import { getFormData } from "../../utils/helpers";

const session = await getSession();

const headers = {
  Authorization: `Bearer ${session?.user.accessToken}`,
};

export const createAnnouncement = async (payload) => {
  if (typeof payload.poster === "object") {
    return axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/announcements`,
      getFormData(payload),
      {
        headers: {
          ...headers,
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }

  return axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/announcements`,
    payload,
    { headers }
  );
};

export const updateAnnouncementByUid = async (uid, payload) => {
  if (typeof payload.poster === "object") {
    return axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/announcements/${uid}`,
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
    `${process.env.NEXT_PUBLIC_API_URL}/announcements/${uid}`,
    payload,
    { headers }
  );
};

export const bulkDeleteAnnouncements = async (payload) => {
  return axios.delete(
    `${process.env.NEXT_PUBLIC_API_URL}/announcements`,
    payload,
    { headers }
  );
};

export const searchAnnouncements = async (payload) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/announcements/search`,
    payload,
    { headers }
  );
};

export const getAnnouncementByUid = async (uid) => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/announcements/${uid}`, {
    headers,
  });
};

export const publishUnpublishAnnouncement = async (uid) => {
  return axios.patch(
    `${process.env.NEXT_PUBLIC_API_URL}/announcements/visibility/${uid}`,
    null,
    {
      headers,
    }
  );
};
