import axios from "axios";
import useNotifications from "../Components//Notification";
import { useRouter } from "next/router";
import { API_BASE_URL } from "./config";

export const Register = async (credentials) => {
    const { showNotification } = useNotifications();
  try {
    const response = await axios.post(
      `${API_BASE_URL}/accounts/register/`,
      credentials
    );
    console.log(response.data);
    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem("token", JSON.stringify(response.data.token));
    showNotification(`User Registered Successfuly`, "success");

    window.location.replace("/login");

    return response.data;
  } catch (error) {
    for (const key in error?.response?.data) {
      showNotification(
        `${(key.toUpperCase(), error?.response?.data[key])}`,
        "error"
      );
    }
  }
};

export const loginUser = async (credentials) => {
  const { showNotification } = useNotifications();

  try {
    const response = await axios.post(
      `${API_BASE_URL}/accounts/login/`,
      credentials
    );
    console.log(response.data);
    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem("token", JSON.stringify(response.data.token));
    showNotification(`User Login Successfuly`, "success");
    return response.data;
  } catch (error) {
    for (const key in error?.response?.data) {
      showNotification(
        `${(key.toUpperCase(), error?.response?.data[key])}`,
        "error"
      );
    }
    // throw new Error(error.response.data.message);
  }
};
export const GetHotels = async (credentials) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/hotels`);

    return response.data;
  } catch (error) {
    // throw new Error(error.response.data.message);
  }
};
export const GetHotelsDetails = async (credentials) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/hotels${credentials?.hotel_id}`
    );

    return response.data;
  } catch (error) {
    // throw new Error(error.response.data.message);
  }
};

export const GetRooms = async (credentials) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/hotels/rooms`);

    return response.data;
  } catch (error) {}
};
export const updateUser = async (credentials) => {
  const { showNotification } = useNotifications();
  const token = JSON.parse(localStorage.getItem("token"));

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,

        "Content-Type": "multipart/form-data",
      },
    };
    const response = await axios.patch(
      `${API_BASE_URL}/accounts/update_profile${credentials?.id}/`,
      credentials,
      config
    );
    console.log(response.data);
    //localStorage.setItem("user", JSON.stringify(response.data));
    // localStorage.setItem("token", JSON.stringify(response.data.token));
    showNotification(`User updated Successfuly`, "success");
    return response.data;
  } catch (error) {
    for (const key in error?.response?.data) {
      showNotification(
        `${(key.toUpperCase(), error.response.data[key])}`,
        "error"
      );
    }
    // throw new Error(error.response.data.message);
  }
};
