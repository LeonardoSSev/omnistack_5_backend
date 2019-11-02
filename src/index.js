const express = require('express');
const mongoose = require('mongoose');

const app = express();

const { stringConnection } = require('../databaseConfig');

mongoose.connect(stringConnection, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})


app.listen(3333, () => {
  console.log('Server started on port 3333');
})