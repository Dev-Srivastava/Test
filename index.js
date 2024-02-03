const express = require("express");
const user = require("./data.json")
const app = express();
const port = 8000

app.get("api/users", (req,res)=>{
    return res.json(user);
})

app.listen(port, ()=> console.log("Hello"))