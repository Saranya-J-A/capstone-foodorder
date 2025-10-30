const Admin = require('../models/adminModel');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');

// REGISTER ADMIN
const registerAdmin = async (req, res) => {
  try
   {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ message: 'Fill all fields' });

    const exists = await Admin.findOne({ email });
    if (exists) return res.status(400).json({ message: 'Admin already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = await Admin.create({ name, email, password: hashedPassword });
    const token = generateToken(admin._id, 'admin');

    res
      .cookie('token', token, { httpOnly: true, maxAge: 60 * 60 * 1000 })
      .json({ message: 'Admin registered', admin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// LOGIN ADMIN
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ message: 'Admin not found' });

 console.log("Entered password:", password);
    console.log("Stored password from DB:", admin.password);
    console.log("Password type:", typeof password, "| Admin password type:", typeof admin.password);



    // Debug logs
    console.log("Entered password:", password);
    console.log("Stored hashed password:", admin.password);

    const match = await bcrypt.compare(password, admin.password);
    if (!match) return res.status(400).json({ message: 'Invalid password' });

    const token = generateToken(admin._id, 'admin');
    res
      .cookie('token', token, { httpOnly: true, maxAge: 60 * 60 * 1000 })
      .json({ message: 'Login successful', admin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// LOGOUT ADMIN
const logoutAdmin = (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Admin logged out' });
};

// GET PROFILE
const getProfileAdmin = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin._id).select('-password');
    res.json({ profile: admin });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// DELETE ADMIN
const deleteAdmin = async (req, res) => {
  try {
    await Admin.findByIdAndDelete(req.admin._id);
    res.clearCookie('token');
    res.json({ message: 'Admin account deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { registerAdmin, loginAdmin, logoutAdmin, getProfileAdmin, deleteAdmin };
