const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main()
.then((res) => {
    console.log("Connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// insert
let allChats = [
    {
    from : "ashi",
    to : "mussu",
    msg : "please send java notes",
    created_at : new Date()
    },
    {
    from : "neha",
    to : "pirti",
    msg : "where are you?",
    created_at : new Date()
    },
    {
    from : "madhu",
    to : "samiksha",
    msg : "hii.. long time :)",
    created_at : new Date()
    },
    {
    from : "pratiksha",
    to : "amrit",
    msg : "lets go out today..",
    created_at : new Date()
    },
    {
    from : "siddhi",
    to : "janhavi",
    msg : "bhetuya apan udya free asel tu tar",
    created_at : new Date()
    },
    {
    from : "tony",
    to : "peter",
    msg : "bring me some fruits",
    created_at : new Date()
    }
];

Chat.insertMany(allChats);