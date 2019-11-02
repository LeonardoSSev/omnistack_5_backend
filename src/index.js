const { stringConnection } = require('../databaseConfig');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const server = require('http');
const io = require('scoket.io')(server);

const app = express();

server.Server(app);

mongoose.connect(stringConnection, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use((req, res, next) => {
  req.io = io;

  return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));


app.listen(3333, () => {
  console.log('Server started on port 3333');
})