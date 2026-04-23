const mongoose = require("mongoose");

const connectDB = async()=>{
await mongoose.connect("mongodb+srv://ritikasoni:Ritikatest12345@cluster0.8ftytqe.mongodb.net/devTinder");
};
module.exports={connectDB};