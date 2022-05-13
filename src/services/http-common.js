import axios from "axios";
export default axios.create({
    baseURL: 'https://api-node-school.herokuapp.com/api',
    headers: {
    "Content-type": "application/json"
  }
});