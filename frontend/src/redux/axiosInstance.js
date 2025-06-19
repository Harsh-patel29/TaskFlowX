import axios from "axios";
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error?.response?.status === 401 &&
      error?.response?.data?.message === "Access Token Expired" &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        await axios.post("/refreshToken", {}, { withCredentials: true });
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        await axios.post("/logoutUser", {});
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
