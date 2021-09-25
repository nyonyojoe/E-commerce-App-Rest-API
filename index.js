const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dbURL = "mongodb://localhost:27017"

const startDBServer = () => {
    mongoose.connect(dbURL, {
        useNewURLParser: true,
    }
    ).then(() => console.log("Backend server is running!"))
        .catch((err) => {
        console.log(err)
    })
}

startDBServer();

app.listen(5000, () => {
    console.log("server listening on port 5000")
})