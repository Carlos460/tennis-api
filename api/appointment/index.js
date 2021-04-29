const express = require('express'),
  router = express.Router();

// Appointments can be viewed or changed by the User itself or by Mods

router.get('/', (req, res) => {
  console.log('Responding with all appointments');
  res.send('appointments');
});

router.post('/', (req, res) => {
  console.log('Booking an appointment');
  res.send('appointment Booked');
});

router.put('/', (req, res) => {
  console.log('Updated Appointment');
  res.send('Updated appointment');
});

router.delete('/', (req, res) => {
  console.log('Deleting an appointment');
  res.send('appointment deleted');
});

module.exports = router;
