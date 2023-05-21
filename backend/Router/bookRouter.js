const express = require("express");

const bookRouter = express.Router();
require("dotenv").config();
const { BookModel } = require("../models/bookModel")


bookRouter.get("/", async (req, res) => {
    const book = await BookModel.find();
    res.send(book);
})

bookRouter.post("/signup", async (req, res) => {
    const { title, author, image, price } = req.body;
    try {
        const data = new userModel({ title:title,author:author,image:image,price:price });
        await data.save();
        res.send({ "msg": "book is saved" })

    } catch (err) {
        res.send({ "msg": err.message });
    }

})

module.exports = {
    bookRouter
}