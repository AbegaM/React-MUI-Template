import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
    //'Authorization': localStorage.getItem('ticket-token')
  },
};

const BASE_URL = process.env.REACT_APP_API_URL;

export default {
  signup: async (data) => {
    try {
      const result = await axios.post(`${BASE_URL}auth/signup`, data, config);
      return result;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  signIn: async (data) => {
    try {
      const result = await axios.post(`${BASE_URL}auth/signin`, data, config);
      return result;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  getData: async () => {},
};
