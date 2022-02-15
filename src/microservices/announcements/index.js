import axios from "axios";

import { getFormData } from "../../utils/helpers";

export const createAnnouncement = async (token, payload) => {
  if (typeof payload.poster === "object") {
    return axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/announcements`,
      getFormData(payload),
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }

  return axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/announcements`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const updateAnnouncementByUid = async (token, uid, payload) => {
  if (typeof payload.poster === "object") {
    return axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/announcements/${uid}`,
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
    `${process.env.NEXT_PUBLIC_API_URL}/announcements/${uid}`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const bulkDeleteAnnouncements = async (token, payload) => {
  return axios.delete(
    `${process.env.NEXT_PUBLIC_API_URL}/announcements`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const searchAnnouncements = async (token, payload) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/announcements/search`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getAnnouncementByUid = async (token, uid) => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/announcements/${uid}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const publishUnpublishAnnouncement = async (token, uid) => {
  return axios.patch(
    `${process.env.NEXT_PUBLIC_API_URL}/announcements/visibility/${uid}`,
    null,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
