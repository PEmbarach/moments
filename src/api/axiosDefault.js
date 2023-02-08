import axios from "axios";

axios.defaults.baseURL = 'https://git.heroku.com/dfi-api.git'
axios.defaults.headers.post["Content-TYpe"] = "multipart/form-data";
axios.defaults.withCredentials = true;
