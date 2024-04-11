const mongoose = require("mongoose");

const URI = "mongodb+srv://priyamber0684:Priyam2@cluster0.2ml7mxs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectToMongo = async ()=>{
   await  mongoose.connect(URI)
    .then(()=>{
        console.log("Connected To MongoDB successfully");
    })
}

module.exports = connectToMongo;