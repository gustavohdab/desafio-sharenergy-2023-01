/**
 * This function creates an axios instance with a baseURL of http://localhost:3000 and returns it.
 * @returns An object with a baseURL property.
 */
import axios from "axios";

export function myAPI() {
  const api = axios.create({
    baseURL: "http://localhost:3000",
  });

  return api;
}
