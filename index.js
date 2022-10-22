require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

//Routes
const userRouter = require('./routes/userRoute');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

//Routes
app.use('/user', userRouter);

//PORT and MongoDB URL
const PORT = process.env.PORT || 5000;
const URL = process.env.MONGODB_URL;



//MongoDB Connection
mongoose.connect(URL, {useNewUrlParser: true}, (err) => {
    if (err) throw err;
    console.log("MongoDB Connected");
})
app.listen(PORT, () => {
    console.log("Listening at", PORT);
})