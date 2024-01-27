import axios from "axios";
import { API_URL } from "../lib/Constants";

export const api = axios.create({
  baseURL: API_URL,
});
