import axios from "axios";
import { API_BASE_URL } from "./config";

async function getallCategories(credentials) {
  try {
    const response = await axios.get(`${API_BASE_URL}/category`, {
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
export async function getallBrandsApi(credentials) {
  try {
    const response = await axios.get(`${API_BASE_URL}/category/brands`, {
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
export async function getallDiseaseApi(credentials) {
  try {
    const response = await axios.get(`${API_BASE_URL}/category/disease`, {
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
export async function getallIngredientApi(credentials) {
  try {
    const response = await axios.get(`${API_BASE_URL}/category/ingredient`, {
      headers: {
        Authorization: "",
      },
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    // console.log(error.response);
  }
}
export async function getallUsesApi(credentials) {
  try {
    const response = await axios.get(`${API_BASE_URL}/category/uses`, {
      headers: {
        Authorization: "",
      },
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    // console.log(error.response);
  }
}
export default getallCategories;
