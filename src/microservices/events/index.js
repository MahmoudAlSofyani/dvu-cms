import axios from "axios";

export const createEvent = async (payload) => {
  return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/events`, payload);
};

export const updateEventByUid = async (uid, payload) => {
  return axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/events/${uid}`);
};

export const bulkDeleteEvents = async (payload) => {
  return axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/events`);
};

export const searchEvents = async (payload) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/events/search`,
    payload
  );
};

export const getEventByUid = async (uid) => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/events/${uid}`);
};
