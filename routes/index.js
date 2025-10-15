const express = require('express')
const router = express.Router()

const userRoutes = require('./userRoutes')
const adminRoutes = require('./adminRoutes')

// http://localhost:3001/api/user
router.use('/user', userRoutes); 
// http://localhost:3001/api/admin

router.use('/admin', adminRoutes);   


module.exports = router