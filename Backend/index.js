const connectToMongo = require('./db.js');
const express = require("express");
const cors = require('cors')

const app = express();
app.use(cors());

const port = 3000;

connectToMongo();

app.use(express.json());

app.use("/api/auth/", require("./Routes/auth.js"));


app.listen(port, ()=>{
    console.log(`The app is listening on port ${port}`);
})