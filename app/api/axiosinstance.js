const axios = require("axios");
const instance = axios.create({
  baseURL: "https://casestudy.devsed.com/api",
});
export default instance;
