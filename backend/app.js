const express = require("express");
const app = express();
const connected = require("./database/connection.js");

// Connect to database, once connected, will start listening for requests.
connected
    .then(()=>{  
        console.log("Connected to database.");
        const server = app.listen(8080, ()=>{
            console.log("Listening for requests.");
        });
    });


const apiRouter = require("./routes/index.js");

// express.json() is middleware that parses incoming requests with JSON payload
app.use(express.json()); 

// Responds to all api calls 
app.use("/api", apiRouter);