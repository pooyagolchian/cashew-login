import axios from "axios";
import { ENV_CONFIG } from "../EnvConfig";

const token = localStorage ? localStorage.getItem("token") : "";

export default axios.create({
  baseURL: `${ENV_CONFIG.API_URL}`,
  headers: {
    "Content-Type": "application/json",
    Authorization: token ? `Basic ${token}` : "",
  },
});
