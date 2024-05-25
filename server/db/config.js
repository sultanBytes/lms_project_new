const mongoose = require('mongoose');
require('dotenv').config();

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}.f3yzdsd.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=${process.env.DB_APP_NAME}`;

mongoose.connect(url)
.then(()=>{
    console.log('Database connected');
})
.catch((err)=>{
    console.log(err)
})