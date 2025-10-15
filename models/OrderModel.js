const mongoose = require(`mongoose`)

const orderSchema = new mongoose.Schema(
    {
  user: 
  { 
    type: mongoose.Schema.Types.ObjectId, ref: "User" 
},
  items: [
    {
      food: 
      { 
        type: mongoose.Schema.Types.ObjectId, ref: "Item" 
    },
      quantity: Number,
      price: Number,
    },
  ],
  totalAmount: 
  { 
    type: Number, 
    required: true 
},
  paymentStatus: 
  {
    type: String,
    enum: ["pending", "paid", "failed"],
    default: "pending",
  },
  orderStatus: 
  {
    type: String,
    enum: ["placed", "preparing", "on the way", "delivered", "cancelled"],
    default: "placed",
  },
  deliveryAddress: 
  { 
    type: String 
},
});

module.exports = mongoose.model(`order`,orderSchema)

