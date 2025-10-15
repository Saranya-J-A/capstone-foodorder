const mongoose = require(`mongoose`)

const offerSchema = new mongoose.Schema(
    {
  code: 
  { 
    type: String, 
    required: true, 
    unique: true 
},
  discountPercentage: 
  { 
    type: Number, 
    required: true 
},
  expiryDate: 
  { 
    type: Date, 
    required: true 
},
  isActive: 
  {
     type: Boolean, 
     default: true 
    },
  createdAt: 
  { 
    type: Date, 
    default: Date.now 
},
});

module.exports = mongoose.model(`Offer`,offerSchema)
