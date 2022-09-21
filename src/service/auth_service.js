import axios from "axios";

const API_URL = "/auth";

const signup = (email, password) => {
  return axios
    .post(API_URL + "/signup", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.access) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const login = (email, password) => {
  return axios
    .post("http://127.0.0.1:8000/api/token/", {
      email,
      password, 
    })
    .then((response) => {
      if (response.data.access) {
        // save ass access to save the specific access token
        localStorage.setItem("user", JSON.stringify(response.data.access));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;