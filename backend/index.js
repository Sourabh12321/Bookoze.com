const express = require("express");
const {connection} = require("./config/db");
const {userRouter} = require("./Router/userRouter");
const {bookRouter} = require("./Router/bookRouter")

const cors = require("cors");
require('dotenv').config()

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user",userRouter);
app.use("/book",bookRouter);

app.get("/",(req,res)=>{
    res.send("home router")
})

app.listen(process.env.PORT,async ()=>{
    try{
        await connection
        console.log("working");
    }catch(err){
        console.log(err.message)
    }
})