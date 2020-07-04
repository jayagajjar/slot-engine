const express = require('express')

const ReelsCtrl = require('../controllers/reels-ctrl')

const router = express.Router()

router.post('/reels', ReelsCtrl.createReelsData)
router.put('/reels/:id', ReelsCtrl.updateReelsData)
router.delete('/reels/:id', ReelsCtrl.deleteReelsData)
router.get('/reels/:id', ReelsCtrl.getReelsDataById)
router.get('/reels', ReelsCtrl.getReelsData)

module.exports = router