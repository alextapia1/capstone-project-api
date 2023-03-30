const app = express();
const express = require("express");

require('dotenv').config();
const PORT = process.env.PORT || 8081

const cors = require("cors");
const { CORS_ORIGIN } = process.env;

app.use();

app.use(cors({origin:CORS_ORIGIN}));




app.listen(PORT, () =>{
    console.log("listening on port 8080")
})