import axios from "axios";
import { API_BASE_URL } from "./config";

async function Postcontactus(Data) {
  try {
    const response = await axios.post(`${API_BASE_URL}/contactus`, Data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response);

    // throw new Error(error.response.data.message);
  }
}

export default Postcontactus;
