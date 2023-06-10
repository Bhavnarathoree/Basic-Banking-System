const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");

app.use(
    cors({
        origin: "*",
    })
);
app.use(express.json())
app.use(require('./router/users'))
app.use(require('./router/transaction'))
app.listen(3001, () => {
    console.log("Server run");
})
