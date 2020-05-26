import axios from "axios";

const BASE_URL = "http://localhost:8000";

export const addUser = (name) => {
  axios
    .post(`${BASE_URL}/players`, {
      name,
    })
    .catch((error) => alert(error));
};
