const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('./db');

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
