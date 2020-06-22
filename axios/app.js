'use strict';

const axios = require('axios').default;

const urlJson = 'https://jsonplaceholder.typicode.com/users'

axios.get(urlJson)
  .then((res) => {
    console.log(res)
  })