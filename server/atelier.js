const axios = require('axios');
require('dotenv').config();

const queryAPI = (method, url, body) => {

  return axios({
    headers: {
      Authorization: process.env.ATELIER_API_KEY
    },
    method: method,
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp${url}`,
    data: body
  });

};

module.exports = queryAPI;