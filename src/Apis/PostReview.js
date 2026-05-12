import useNotifications from "@/Components/Notification";
import axios from "axios";
import { useEffect, useState } from "react";

async function PostReview(formdata) {
  const token = JSON.parse(localStorage.getItem("token"));
  const { showNotification } = useNotifications();

  // console.log(token);
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,

        "Content-Type": "multipart/form-data",
      },
    };
    const response = await axios.post(
      "https://backend.well-medic.com/reviews",
      formdata,
      config
    );
    // console.log(response.data);
    showNotification(`Review Sent Successfuly`, "success");

    return response.data;
  } catch (error) {
    // console.log(error, "errrr");
    // throw new Error(error.response.data.message);
    for (const key in error?.response?.data) {
      showNotification(
        `${(key.toUpperCase(), error.response.data[key])}`,
        "error"
      );
    }
  }
}

export default PostReview;
