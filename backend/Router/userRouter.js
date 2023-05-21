const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRouter = express.Router();
require("dotenv").config();
const {userModel} = require("../models/userModel")


userRouter.get("/",async (req,res)=>{
    const user = await userModel.find();
    res.send(user);
})

userRouter.post("/signup",async (req,res)=>{
    const {name,email,password} = req.body;
    try{
        const user = await userModel.find({ email });
        if(user.length==0){
            bcrypt.hash(password,5, async (err,hash) =>{
                if(err){
                    res.send({"msg":err.message})
                }else{
                    const data = new userModel({name,email,password:hash});
                    await data.save();
                    res.send({"msg":"data is saved"})
                }
            })
        }else{
            res.send("user is already registered");
        }
        
    }catch(err){
        res.send({"msg":err.message});
    }

})


userRouter.post("/login", async (req, res) => {
    const { email, password } = (req.body);
    try {
        const user = await userModel.find({ email });
        if (user.length > 0) {
            bcrypt.compare(password, user[0].password, (err, result) => {
                if (result) {
                    let token = jwt.sign({ userId: user[0]._id }, process.env.KEY, { expiresIn: "3600s" })
                    res.send({ "msg": "Logged In ", "token": token ,"result":user[0]._id});
                } else {
                    res.send({ "msg": "Wrong credentials" });
                }
            });

        } else {
            res.send({ "msg": "Wrong credentials" });
        }
    } catch (error) {
        res.send({ "msg": "New user Unable to  Logged In", "error": error.message });
    }


})


module.exports = {
    userRouter
}






