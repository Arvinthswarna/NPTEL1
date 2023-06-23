const express = require("express");
const app = express();
require("./db/conn");
const port = process.env.PORT || 2035;
app.get("/",(req,res)=>{
    res.send("hello")
});

app.listen(port,()=>{
    console.log(`server running `)
})