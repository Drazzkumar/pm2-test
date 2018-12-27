const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello guys");
});

app.listen(4000,()=>{
    console.log("the app is running on port 4000");
})
