import axios from "axios";
// import { API_URL } from "@env";

const client = axios.create({
  baseURL: "https://chorehubdrf.azurewebsites.net/",
});

export default client;
