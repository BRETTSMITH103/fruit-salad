const db = require('../models')
const path = require('path');

module.exports = (app) => {
  //index
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  //exercise
  app.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
  });
  //stats
  app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
  });
}


// const router = require('express').Router();
// const path = require('path');

// router.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });

// router.get('/stats', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/stats.html'));
// });

// router.get('/exercise', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/exercise.html'));
// });

// module.exports = router;
