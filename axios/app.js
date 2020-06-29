'use strict';

const axios = require('axios').default;
const urlJson = 'https://jsonplaceholder.typicode.com/users'

async function appAxios() {
  try {
    const res = await axios.get(urlJson);
    const params = res.data;

    for (const param of params) {
      console.log(`User ID : ${param.id} ${param.name}`);
    }
  } catch (error) {
    const status = error.response;
    console.log(`Error! status : ${status}`);
  };
}

appAxios();
