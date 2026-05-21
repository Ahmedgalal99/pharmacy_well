import axios from "axios";
import { API_BASE_URL } from "./config";

async function getAllReviews(credentials) {
  try {
    const response = await axios.get(`${API_BASE_URL}/reviews/`, {
      headers: {
        Authorization: "",
      },
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    // console.log(error.response);
    // throw new Error(error.response.data.message);
  }
}

export default getAllReviews;
