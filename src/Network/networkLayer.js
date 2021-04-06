import axios from "axios";

const API_HOST = 'https://www.googleapis.com/books/v1/'


export const get_request = (endpoint) => {
  const url = API_HOST + endpoint;
   return new Promise((resolve, reject) => {
    try {

      axios
        .get(url, {

          timeout: 30000,

        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => { reject(err) });
    } catch (err) {
      reject(err);
    }
  });
};