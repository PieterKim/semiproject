const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config()

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('uploads'))

mongoose.connect(process.env.DB_URI)
.then( () =>
console.log('DB 연결 성공')
).catch ((err) =>{
    console.log(err)
})

app.use('/api/post', require("./routes"))

app.listen(port, () =>{
    console.log('server running at :', port)
})