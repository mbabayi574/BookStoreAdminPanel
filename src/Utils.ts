import { API_URL } from "./assets/config";
import axios from "axios";

export const axiosPost = async (url: string, data: unknown) => {
  try {
    const response = await axios.post(`${API_URL}${url}`, data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error in POST request:", error);
    throw error;
  }
};
