const connection = require('./connection')
const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());
const port = 3000;

async function server() {
    try {
        const data = await connection();

        app.get("/product", (req, res) => {
            res.send(data);
        })

        app.listen(port, () => {
            console.log("Server is running...");
        })
    } catch (error) {
        
    }
    
} 

server()
