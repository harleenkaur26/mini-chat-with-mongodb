const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));   //for css
app.use(express.urlencoded({extended : true}));


main()
.then((res) => {
    console.log("Connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// index route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", {chats});
});

// new chat route 
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});

// create route
app.post("/chats", (req, res) => {
    let {from, msg, to} = req.body;
    let newChat = new Chat ({
        from : from,
        msg : msg,
        to : to
    });
    newChat.save()
    .then((res) => {
        console.log("res");
    })
    .catch((err) => {
        console.log(err);
    });
    res.redirect("/chats");

})


// edit route
app.get("/chats/:id/edit", async (req, res) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
})




// home route
app.get("/", (req, res) => {
    res.send("root is working");
});



app.listen(8080, () => {
    console.log("Server starting at port 8080");
})