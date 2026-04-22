const mongoose = require("mongoose");


// Returns a promise and tells us that whether the connection is successfully established or not (but this is not a good way to connect a db)
// mongoose.connect("mongodb+srv://ritikasoni:Ritikatest12345@cluster0.8ftytqe.mongodb.net/");

const connectDB = async()=>{
await mongoose.connect("mongodb+srv://ritikasoni:Ritikatest12345@cluster0.8ftytqe.mongodb.net/devTinder");
};


module.exports={connectDB};