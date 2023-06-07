const express = require('express')

const router = express.Router()
const mainPageControllers = require('../controllers/appControllers')

router.get('/',(req, res, next) => {
    res.redirect('/ru')
})

router.get('/ru', mainPageControllers.getPageRu )

router.get('/uz', mainPageControllers.getPageUz )

router.get('/en', mainPageControllers.getPageEn )

module.exports = router;