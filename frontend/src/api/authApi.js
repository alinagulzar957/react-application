// src/api/authApi.js
import axiosClient from "./axiosClient";

const authApi = {
  signup: async ({ email, password }) => {
    try {
      const response = await axiosClient.post("/auth/signup", { email, password });
      return response;
    } catch (error) {
      throw error;
    }
  },

  login: async ({ email, password }) => {
    try {
      const response = await axiosClient.post("/auth/login", { email, password });
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default authApi;
