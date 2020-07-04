const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Reels = new Schema(
    {
        id: { type: String, required: true },
        values:{type:String}
    },
    { timestamps: true },
)
module.exports = mongoose.model('reels', Reels)