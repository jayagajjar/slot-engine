const ShoppingListItem = require('../models/shoppinglist-model')

createShoppingListItem = (req, res) => {
    const body = req.body
    
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a item',
        })
    }

    const item = new ShoppingListItem(body)

    if (!item) {
        return res.status(400).json({ success: false, error: err })
    }

    item
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: item._id,
                message: 'ShoppingListItem created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'ShoppingListItem not created!',
            })
        })
}

updateShoppingListItem = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    ShoppingListItem.findOne({ _id: req.params.id }, (err, item) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'ShoppingListItem not found!',
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
                    message: 'ShoppingListItem updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'ShoppingListItem not updated!',
                })
            })
    })
}

deleteShoppingListItem = async (req, res) => {
    await ShoppingListItem.findOneAndDelete({ _id: req.params.id }, (err, item) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!item) {
            return res
                .status(404)
                .json({ success: false, error: `ShoppingListItem not found` })
        }

        return res.status(200).json({ success: true, data: item })
    }).catch(err => console.log(err))
}

getShoppingListItemById = async (req, res) => {
    await ShoppingListItem.findOne({ _id: req.params.id }, (err, item) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!item) {
            return res
                .status(404)
                .json({ success: false, error: `ShoppingListItem not found` })
        }
        return res.status(200).json({ success: true, data: item })
    }).catch(err => console.log(err))
}


getShoppingListItems = async (req, res) => {
    console.log("getShoppingListItems called")

    await ShoppingListItem.find({}, (err, items) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!items.length) {
            return res
                .status(404)
                .json({ success: false, error: `ShoppingListItem not found` })
        }
        return res.status(200).json({ success: true, data: items })
    }).catch(err => console.log(err))
}

module.exports = {
    createShoppingListItem,
    updateShoppingListItem,
    deleteShoppingListItem,
    getShoppingListItems,
    getShoppingListItemById,
}