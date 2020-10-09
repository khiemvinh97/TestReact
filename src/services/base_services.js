import axios from "axios";
import { BASE_URL } from "../constants/Config";

// CREATE AN INSTANCE OF AXIOS
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 50000,
});

const getDataByID = async (url, id) => {
  try {
    const result = await axiosInstance.get(`${url}/${id}`);
    return result;
  } catch (e) {
    throw e;
  }
};

const getTakenData = async (url, page, perPage, sort, typeSort, search) => {
  try {
    const result = await axiosInstance.get(
      `${url}?page=${page}&limit=${perPage}&search=${search}&sortBy=${sort}&order=${typeSort}`
    );
    return result;
  } catch (e) {
    throw e;
  }
};

const getLength = async (url, search) => {
  try {
    const result = await axiosInstance.get(`${url}?search=${search}`);
    return result;
  } catch (e) {
    throw e;
  }
};

export { getDataByID, getTakenData, getLength };
