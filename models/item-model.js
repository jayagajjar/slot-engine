const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Item = new Schema(
    {
        name: { type: String, required: true },
        minweightreq: { type: Number},
        currentweight: { type: Number},
    },
    { timestamps: true },
)

module.exports = mongoose.model('items', Item)