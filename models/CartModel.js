const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [
    {
      item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' }, 
      quantity: { type: Number, default: 1 },
    },
  ],
  totalPrice: {
    type: Number,
    default: 0,
  },
  offer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Offer',
    default: null,
  },
});

module.exports = mongoose.model('Cart', cartSchema);
