import axios from "axios";

const api = axios.create({ baseURL: "https://nardinis-hotels.vercel.app/hotels" });

export default api;