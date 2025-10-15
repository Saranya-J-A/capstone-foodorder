const express = require('express');
const router = express.Router();
const { registerAdmin, loginAdmin, logoutAdmin, getProfileAdmin, dashboard } = require('../controllers/adminController');
const authAdmin = require('../middlewares/authAdmin');

router.post('/register', registerAdmin);
router.post('/login', loginAdmin);
router.post('/logout', logoutAdmin);
router.get('/profile', authAdmin, getProfileAdmin);
router.get('/dashboard', authAdmin, dashboard);

module.exports = router;
