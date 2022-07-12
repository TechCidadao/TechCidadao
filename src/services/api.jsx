import axios from "axios";

const TechCidadaoAPI = axios.create({
  baseURL: "https://tech-cidadao.herokuapp.com",
});

export default TechCidadaoAPI;
