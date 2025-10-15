const mongoose = require(`mongoose`)

const ItemSchema = new mongoose.Schema(
    {
  name: 
  {
     type: String,
      required: true
  },
     description: String,
  price: 
  { 
    type: Number, 
    required: true 
},
  image: String,
  category: 
  {
    type: String,
    enum: ["Starter", "Main Course", "Dessert", "Drink", "Other"],
  },
  isAvailable: 
  { 
    type: Boolean, 
    default: true 
},
  restaurant: 
  {
     type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" 
    },
});

module.exports = mongoose.model(`Item`,ItemSchema)
