//importings 
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

// for get env
dotenv.config();
//onnect db
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
//routes



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
