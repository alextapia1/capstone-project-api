const express = require("express");
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 8081

const cors = require("cors");
const { CORS_ORIGIN } = process.env;

app.use(express.json())
app.use(express.static('public'))

app.use(cors({origin:CORS_ORIGIN}));

// const warehousesRoute = require('./routes/warehouseRoute');
// app.use('/warehouses', warehousesRoute);

const dateRoute = require('./routes/dateRoute')
app.use('/dates', dateRoute);

app.get('/', (req, res) => {
    console.log('connected to / route')
})

app.listen(PORT, () =>{
    console.log("listening on port 8080")
})