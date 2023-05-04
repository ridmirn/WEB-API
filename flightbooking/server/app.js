const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require ("cors");
app.use(cors());
app.use(express.urlencoded({extended:false}));

const mongoUrl = "mongodb+srv://ridmi:jk1phQFN5qQwJWsB@cluster0.uxrhjva.mongodb.net/HOTEL_CENTRAL?retryWrites=true&w=majority"

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
})
.then(()=>{
    console.log("DB connected");
})
.catch((e) => console.log(e));

require("./Flights");
const Flight = mongoose.model("flight_details");

app.get("/getAllFlights", async(req,res)=>{
    try{
        const allFlights = await Flight.find({});
        res.send({status:"ok", data: allFlights});
    }
    catch(error){
        console.log(error);
    }
})

app.listen(5000, ()=>{
    console.log("server started");
});
