import axios from "axios";
// import { API_URL } from "@env";

export default axios.create({
  baseURL: "http://127.0.0.1:8000/",
});
