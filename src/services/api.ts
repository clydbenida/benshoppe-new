import axios from "axios";
import { API_BASE_URL } from "../config/envVariables";
import { getToken, waitForGigya } from "./gigya";

const api = async (url: string, method?: ApiMethod, data?: Record<any, string>) => {
  await waitForGigya();

  const token = await getToken();

  const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`
    },
  })

  try {
    const res = await api.request({
      url,
      method: method ?? "get",
      data: data ?? {},
    })

    return res.data;
  } catch (err) {
    console.log(err);
  }
} 

export default api;
