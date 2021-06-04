const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const db = require('./database');

const app = express();

const PORT = 3000;

// Import Routers
const User = require('./api/user');
const Appointment = require('./api/appointment');

app.get('/', (req, res) => {
  console.log('root end point has been reached!');
  res.send('Welcome to the Tennis Academy API!');
});

app.get('/test', (req, res) => {
  db.query(`SHOW DATABASES`, (err, results) => {
    if (err) res.send(err);
    res.send(results);
  });
});

app.use('/user', User);
app.use('/appointment', Appointment);

app.listen(PORT, () => {
  console.log(`Tennis api is running on port ${PORT}!`);
});
