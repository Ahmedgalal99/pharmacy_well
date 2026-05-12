import axios from "axios";

async function GetCart(credentials) {
  const token = JSON.parse(localStorage.getItem("token"));

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(
      "https://backend.well-medic.com/cart/",
      config
    );
    // console.log(response.data)
    return response.data;
  } catch (error) {
    // console.log(error.response)
    // throw new Error(error.response.data.message);
  }
}

export default GetCart;
