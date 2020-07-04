const ReelsData = require('../models/reels-model')

createReelsData = (req, res) => {
    const body = req.body
    
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a item',
        })
    }

    const item = new ReelsData(body)

    if (!item) {
        return res.status(400).json({ success: false, error: err })
    }

    item
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: item._id,
                message: 'ReelsData created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'ReelsData not created!',
            })
        })
}

updateReelsData = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    ReelsData.findOne({ _id: req.params.id }, (err, item) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'ReelsData not found!',
            })
        }
        item.name = body.name
        item.time = body.time
        item.rating = body.rating
        item
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: item._id,
                    message: 'ReelsData updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'ReelsData not updated!',
                })
            })
    })
}

deleteReelsData = async (req, res) => {
    await ReelsData.findOneAndDelete({ _id: req.params.id }, (err, item) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!item) {
            return res
                .status(404)
                .json({ success: false, error: `ReelsData not found` })
        }

        return res.status(200).json({ success: true, data: item })
    }).catch(err => console.log(err))
}

getReelsDataById = async (req, res) => {
    await ReelsData.findOne({ _id: req.params.id }, (err, item) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!item) {
            return res
                .status(404)
                .json({ success: false, error: `ReelsData not found` })
        }
        return res.status(200).json({ success: true, data: item })
    }).catch(err => console.log(err))
}


getReelsData = async (req, res) => {
    console.log("getReelsData called")

    await ReelsData.find({}, (err, items) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!items.length) {
            return res
                .status(404)
                .json({ success: false, error: `ReelsData not found` })
        }
        return res.status(200).json({ success: true, data: items })
    }).catch(err => console.log(err))
}

module.exports = {
    createReelsData,
    updateReelsData,
    deleteReelsData,
    getReelsData,
    getReelsDataById,
}