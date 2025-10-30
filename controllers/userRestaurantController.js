const Restaurant = require('../models/RestaurantModel')
const Item = require('../models/ItemModel')


const getRestaurants = async(req , res) =>
{
    try {
        const  restaurants = await Restaurant.find().select('-_v').lean();
        res.json({restaurants})
        
    } catch (error) {
        res.status(500).json({message:'Server error'})
        
    }
}


module.exports = getRestaurants;