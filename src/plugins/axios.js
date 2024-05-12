import axios from "axios";

const request = axios.create({
  baseURL: "https://prepaid.iak.dev/api",
});

export default request;
