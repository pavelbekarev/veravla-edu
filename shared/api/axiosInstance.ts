import axios from "axios";

export const defaultEndpoint = "http://localhost:3000/api";
export const defaultImageEndpoint = "http://localhost:3000";

export const api = axios.create({
  baseURL: "http://localhost/veravla_edu",
  headers: {
    "Content-Type": "application/json",
  },
});
