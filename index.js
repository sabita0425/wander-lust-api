//const express = require("express"); //import express but old technique
import express from "express"; // import express using ES6 module syntax

const app = express();

app.get("/", (req, res) => {
  res.send("Hello,world");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//function in js
//callback function
//callback hell
//promises/then/catch/asyn/await
