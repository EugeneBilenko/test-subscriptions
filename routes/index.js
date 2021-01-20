const express = require('express');
const router = express.Router();
const StripeController = require('../controllers/StripeController');
const PaddleController = require('../controllers/PaddleController');

/* GET home page. */
router
  .post('/stripe', StripeController)
  .post('/paddle', PaddleController);

module.exports = router;
