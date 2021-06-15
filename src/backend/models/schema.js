const mongoose = require ("mongoose")

//this package is specifically to omit the __v field and rename _id as id

const vegSchema = new mongoose.Schema({
    //creating schema for 
    vegetable_name: {
        type : String,//name is in string format
    },

    vegetable_quantity: {
        type : Number,//name is in string format
        
    },
    vegetable_cost:{
        type :Number,//name is in string format
        
    }
})


//creating model for database entry
const vegModel = mongoose.model("Veg",vegSchema)
module.exports = vegModel