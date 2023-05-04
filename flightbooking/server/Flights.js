const mongoose = require ("mongoose");

const flightSchema = new mongoose.Schema({

    // airline: {type:String, required:true},
    // departure:{type:String, required: true},
    // duration:{type:String, required:true},
    // arrival:{type:String, required:true},
    // price:{type:String, required:true}

    airline:String,
    departure:String,
    duration:String,
    arrival:String,
    price:String,
},
{
    collection:"flight_details",
}
);

mongoose.model("flight_details", flightSchema);