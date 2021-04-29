const express = require('express');

const app = express();

const PORT = 3000;

// Import Routers
const User = require('./api/user');
const Appointment = require('./api/appointment');

app.get('/', (req, res) => {
  console.log('root end point has been reached!');
  res.send('Welcome to the Tennis Academy API!');
});

app.use('/user', User);
app.use('/appointment', Appointment);

app.listen(PORT, () => {
  console.log(`Tennis api is running on port ${PORT}!`);
});
