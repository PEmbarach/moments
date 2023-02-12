import axios from "axios";

axios.defaults.baseURL = 'https://dfi-api.herokuapp.com/'
axios.defaults.headers.post["Content-TYpe"] = "multipart/form-data";
axios.defaults.withCredentials = true;
