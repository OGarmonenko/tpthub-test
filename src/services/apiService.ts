import axios from "axios";
import CONSTANTS from "@/constants/constants";

const apiService = axios.create({
  baseURL: CONSTANTS.API.BASE_URL,
});

export default apiService;
