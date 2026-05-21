import useNotifications from "../../Components//Notification";
import axios from "axios";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../config";

async function PostCart(formdata) {
  const token = JSON.parse(localStorage.getItem("token"));
  const { showNotification } = useNotifications();

  console.log(token);
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      `${API_BASE_URL}/cart/cart_items/`,
      formdata,
      config
    );
    showNotification(`Item Added Successfuly`, "success");
    return response?.data;
  } catch (error) {
    for (const key in error?.response?.data) {
      showNotification(
        `${(key.toUpperCase(), error?.response?.data[key])}`,
        "error"
      );
    }
    // throw new Error(error.response.data.message);
  }
}
export async function CreateOrder(formdata) {
  const token = JSON.parse(localStorage.getItem("token"));
  const { showNotification } = useNotifications();

  console.log(token);
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      `${API_BASE_URL}/order/`,
      formdata,
      config
    );
    showNotification(` Success!`, "success");
    return response?.data;
  } catch (error) {
    for (const key in error?.response?.data) {
      showNotification(
        `${(key.toUpperCase(), error?.response?.data[key])}`,
        "error"
      );
    }
    // throw new Error(error.response.data.message);
  }
}
export async function getOrders(formdata) {
  const token = JSON.parse(localStorage.getItem("token"));
  const { showNotification } = useNotifications();

  console.log(token);
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.get(`${API_BASE_URL}/order`, config);
    // showNotification(` Success!`, "success");
    return response?.data;
  } catch (error) {
    // throw new Error(error.response.data.message);
  }
}
export async function getOrderHistory(formdata) {
  const token = JSON.parse(localStorage.getItem("token"));
  const { showNotification } = useNotifications();

  console.log(token);
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.get(
      `${API_BASE_URL}/order/history/${formdata?.id}`,
      config
    );
    // showNotification(` Success!`, "success");
    return response?.data;
  } catch (error) {
    // throw new Error(error.response.data.message);
  }
}
export async function getAllOrdersHistory(formdata) {
  const token = JSON.parse(localStorage.getItem("token"));
  const { showNotification } = useNotifications();

  console.log(token);
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.get(`${API_BASE_URL}/order/history`, config);
    // showNotification(` Success!`, "success");
    return response?.data;
  } catch (error) {
    // throw new Error(error.response.data.message);
  }
}
export async function DeleteCart(formdata) {
  const token = JSON.parse(localStorage.getItem("token"));
  const { showNotification } = useNotifications();

  console.log(token);
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,

        "Content-Type": "multipart/form-data",
      },
    };
    const response = await axios.delete(
      `${API_BASE_URL}/cart/cart_items/${formdata?.id}`,
      config
    );
    showNotification(`Item Deleted Successfuly`, "success");
    return response?.data;
  } catch (error) {
    for (const key in error?.response?.data) {
      showNotification(
        `${(key.toUpperCase(), error?.response?.data[key])}`,
        "error"
      );
    }
    // throw new Error(error.response.data.message);
  }
}

export default PostCart;
