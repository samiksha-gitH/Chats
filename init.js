const mongoose = require("mongoose");
const Chat = require("./models/chats.js");

mongoose.connect("mongodb://127.0.0.1:27017/whatsapp").then(() => {
    console.log("DB connection successful.");
}).catch((err) => {
    console.log(`DB connection error:${err}`);
});

let allChat = [
    {from:"neha", to:"priya", msg: "hii, hello", created_at: new Date()},
    {from:"maitreyee", to:"kartik", msg: "miss you", created_at: new Date()},
    {from:"chaitanya", to:"arpita", msg: "kashi ahe", created_at: new Date()},
    {from:"Priyanshu", to:"Priya", msg: "How are you", created_at: new Date()},
    {from:"Aastha", to:"Varanya", msg: "angry", created_at: new Date()},
];

Chat.insertMany(allChat);