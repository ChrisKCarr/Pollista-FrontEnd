import axios from "axios";

export default axios.create({
  baseURL: "https://polly-api.herokuapp.com",
});
