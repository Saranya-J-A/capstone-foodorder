const mongoose = require(`mongoose`)

const cartSchema = new mongoose.Schema(
    {
  user: 
  { 
    type: mongoose.Schema.Types.ObjectId, ref: "User" 
},
  items: [
    {
      Item: { type: mongoose.Schema.Types.ObjectId, ref: "Item" },
      quantity: { type: Number, default: 1 },
    },
  ],
  totalPrice: 
  {
     type: Number, 
     default: 0
     },
});

module.exports = mongoose.model(`Cart`,cartSchema)
