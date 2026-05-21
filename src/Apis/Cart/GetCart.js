import axios from "axios";
import { API_BASE_URL } from "../config";

async function GetCart(credentials) {
  const token = JSON.parse(localStorage.getItem("token"));

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(`${API_BASE_URL}/cart/cart_items/`, config);
    const data = response.data;

    if (Array.isArray(data)) {
      return { cart_items: data };
    }

    if (Array.isArray(data?.results)) {
      return { ...data, cart_items: data.results };
    }

    return data?.cart_items ? data : { cart_items: [] };
  } catch (error) {
    // console.log(error.response)
    // throw new Error(error.response.data.message);
  }
}

export default GetCart;
