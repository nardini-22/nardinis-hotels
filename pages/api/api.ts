import axios from "axios";

const api = axios.create({
  baseURL: "https://cvcbackendhotel.herokuapp.com/hotels",
});

export default api;
