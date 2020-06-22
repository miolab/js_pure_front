'use strict';

const axios = require('axios').default;

const urlJson = 'https://jsonplaceholder.typicode.com/users'

let fetchId = 1

axios.get(urlJson, {
    params: {
      id: fetchId
    }
  })
  .then(res => {
    console.log('Status :', res.status)
    console.log('Data :', res.data)
  })
  .catch(err => {
    console.log('Error :', err)
  })