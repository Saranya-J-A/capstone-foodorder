const express = require('express');
const router = express.Router();
const getRestaurants = require('../controllers/userRestaurantController');

router.get('/', getRestaurants); 

module.exports = router;
