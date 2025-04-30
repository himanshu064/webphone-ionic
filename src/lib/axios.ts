import { ENV } from "@/env";
import Axios, { AxiosInstance } from "axios";

// Environment variables (adjust as needed for your project)
const API_URL = ENV.VITE_APP_API;
const BACKOFFICE_URL = ENV.VITE_APP_BACKOFFICE;

// Create a custom axios instance
const axios: AxiosInstance = Axios.create({
  baseURL: API_URL,
  timeout: 30000, // 30 seconds
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Create a custom axios instance
const axiosBackoffice: AxiosInstance = Axios.create({
  baseURL: BACKOFFICE_URL,
  timeout: 30000, // 30 seconds
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export { axios, axiosBackoffice };
