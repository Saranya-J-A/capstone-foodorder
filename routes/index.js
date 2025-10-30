const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const adminRoutes = require('./adminRoutes');
const restaurantAdminRoutes = require('./adminRestaurantRoutes'); // ✅ FIXED
const userRestaurantRoutes = require('./userRestaurantRoutes');
const adminItemRoutes = require('./adminItemRoutes');
const orderRoutes = require('./orderRoutes');
const offerRoutes = require('./offerRoutes');
const cartRoutes = require('./cartRoutes');

//  Grouped routes
router.use('/user', userRoutes);
router.use('/admin', adminRoutes);
router.use('/restaurant-admin', restaurantAdminRoutes);
router.use('/restaurant', userRestaurantRoutes);
router.use('/item', adminItemRoutes);
router.use('/orders', orderRoutes);  
router.use('/offers', offerRoutes);  
router.use('/cart', cartRoutes);

module.exports = router;
