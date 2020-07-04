const mongoose = require('mongoose')

const connection = mongoose
    .connect('mongodb://heroku_7crf5fw7:41fipvf9e51f8jduav5396vb1@ds161823.mlab.com:61823/heroku_7crf5fw7' , { useNewUrlParser: true ,useUnifiedTopology: true },)

    .catch(e => {
        console.error('Connection error', e.message)
    })

 
const db = mongoose.connection


module.exports = db