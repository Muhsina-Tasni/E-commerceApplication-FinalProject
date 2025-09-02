//importings 
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
// const PORT =process.env.PORT
const userRoutes = require("./routes/userRoutes")
const categoryRoutes=require("./routes/categoryRoutes")
const orderRoutes=require("./routes/orderRoutes")
const profile=require("./routes/userProfileRoutes")
const address=require("./routes/userAddressRoutes")
const cart=require("./routes/cartRouter")
const product=require("./routes/productRoutes")
const orderItems=require("./routes/orderItemRoutes")
const cartItems=require("./routes/cartItemsRoutes")

// for get env
dotenv.config();
//onnect db
connectDB();

const app = express();

// app.use(cors());
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
app.use(express.json());
//routes
app.use("/api/users",userRoutes)
app.use("/api/category",categoryRoutes)
app.use("/api/orders",orderRoutes)
app.use("/api/profile",profile)
app.use("/api/address",address)
app.use("/api/cart",cart)
app.use("/api/product",product)
app.use("/api/orderitem",orderItems)
app.use("/api/cartitems",cartItems)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
