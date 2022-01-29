import axios from "axios";

export const createAnnouncement = async (payload) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/announcements`,
    payload
  );
};

export const editAnnouncementByUid = async (uid, payload) => {
  return axios.patch(
    `${process.env.NEXT_PUBLIC_API_URL}/announcements/${uid}`,
    payload
  );
};

export const bulkDeleteAnnouncements = async (payload) => {
  return axios.delete(
    `${process.env.NEXT_PUBLIC_API_URL}/announcements`,
    payload
  );
};

export const searchAnnouncements = async (payload) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/announcements/search`,
    payload
  );
};

export const getAnnouncementByUid = async (uid) => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/announcements/${uid}`);
};
