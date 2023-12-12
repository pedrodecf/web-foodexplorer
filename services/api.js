import axios from "axios"

export const api = axios.create({
  baseURL: "https://api-foodexplorer-sata.onrender.com",
  withCredentials: true,
})
