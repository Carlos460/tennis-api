const express = require('express'),
  router = express.Router();

router.get('/', (req, res) => {
  console.log('You got all the users!');
  res.send('BOB, Jeb, Sam');
});

router.post('/', (req, res) => {
  console.log('created new user');
  res.send('New user was created');
});

router.put('/', (req, res) => {
  console.log('Updated User');
  res.send('Updated User');
});

router.delete('/', (req, res) => {
  console.log('Deleted User');
  res.send('Deleted User');
});

module.exports = router;
