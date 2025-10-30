const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const router = require('./routes/index'); 
const cors = require('cors'); 

dotenv.config();
connectDB();

//  Enable CORS so Postman can send cookies
app.use(cors({
  origin: true,       
  credentials: true   
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//  All routes start with /api
app.use('/api', router);

// fallback route
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
