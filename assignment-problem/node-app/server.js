import * as constants from './constants';

const express = require('express');

const app = express();

app.get('/', (req, res) => {

  console.log(constants.USERNAME); // David
  console.log(constants.default); // { name: "Billy", age: 40 }
  console.log(constants.default.age); // 40
  res.send(`
    <h1>Hello from inside the very basic Node app!</h1>
  `);
})

app.listen(3000);