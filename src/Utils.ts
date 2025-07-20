import { API_URL } from "./assets/config";
import axios from "axios";

export const axiosPost = async (url: string, data: unknown) => {
  try {
    const response = await axios.post(`${API_URL}${url}`, data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token") || ""}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error in POST request:", error);
    throw error;
  }
};

export const axiosPatch = async (
  url: string,
  data: unknown,
  params?: Record<string, string>
) => {
  try {
    const response = await axios.patch(`${API_URL}${url}`, data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token") || ""}`,
      },
      params,
    });
    return response.data;
  } catch (error) {
    console.error("Error in PATCH request:", error);
    throw error;
  }
};

export const axiosGet = async (
  url: string,
  params?: Record<string, string>
) => {
  try {
    const response = await axios.get(`${API_URL}${url}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token") || ""}`,
      },
      params,
    });
    return response.data;
  } catch (error) {
    console.error("Error in GET request:", error);
    throw error;
  }
};

export const axiosDelete = async (
  url: string,
  params?: Record<string, string>
) => {
  try {
    const response = await axios.delete(`${API_URL}${url}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token") || ""}`,
      },
      params,
    });
    return response.data;
  } catch (error) {
    console.error("Error in DELETE request:", error);
    throw error;
  }
};
