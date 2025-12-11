import { environtment } from "@/config/environtment";
import axios from "axios";

export const client = axios.create({
  baseURL: environtment.apiUrl || "http://localhost:3000/api/v1",
});
