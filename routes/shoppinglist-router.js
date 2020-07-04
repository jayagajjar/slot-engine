const express = require('express')

const ShoppingListCtrl = require('../controllers/shoppinglist-ctrl')

const router = express.Router()

router.post('/shoppinglist', ShoppingListCtrl.createShoppingListItem)
router.put('/shoppinglist/:id', ShoppingListCtrl.updateShoppingListItem)
router.delete('/shoppinglist/:id', ShoppingListCtrl.deleteShoppingListItem)
router.get('/shoppinglist/:id', ShoppingListCtrl.getShoppingListItemById)
router.get('/shoppinglist', ShoppingListCtrl.getShoppingListItems)

module.exports = router