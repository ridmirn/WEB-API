// require ("dotenv").config();
 const express = require ("express");
// const cors = require("cors");
const app = express();
const flightsRoutes = require("./app");

// app.use(express.json());
// app.use(cors());

app.use("/", flightsRoutes);

const port = process.env.PORT || 6000;
app.listen(port, () => console.log("Listening to port ${port}..."));

