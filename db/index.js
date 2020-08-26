const mongoose = require('mongoose')
let mongodbURI;
   if(process.env.MONGODB_URI==undefined){
        mongodbURI= 'mongodb+srv://admin:admin@cluster0.ppebl.mongodb.net/slotengine?retryWrites=true&w=majority'
   }else{
        mongodbURI =process.env.MONGODB_URI
   }
const connection = mongoose
    .connect(mongodbURI, { useNewUrlParser: true ,useUnifiedTopology: true },)
    .catch(e => {
        console.error('Connection error', e.message)
    })

 
const db = mongoose.connection

module.exports = db