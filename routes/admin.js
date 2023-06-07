const express = require('express')

const router = express.Router()
const adminControllers = require('../controllers/adminControllers')

const isAuth = require('../middleware/is-auth')

router.get('/admin/signIn',  adminControllers.getSignIn)

router.post('/admin/signIn', adminControllers.postSignIn)

router.get('/admin', isAuth.adminIsAuth , adminControllers.getAdmin)

router.post('/admin/videoDelete/:id', isAuth.adminIsAuth , adminControllers.postDeleteVideo)

router.get('/admin/addVideos', isAuth.adminIsAuth , adminControllers.getAddVideos   )

router.post('/admin/addVideos', isAuth.adminIsAuth , adminControllers.postAddVideos)

router.get('/admin/:id/editVideos', isAuth.adminIsAuth , adminControllers.getEditVideos   )

router.post('/admin/:id/editVideos', isAuth.adminIsAuth , adminControllers.postEditVideos   )

router.get('/admin/language-ru', isAuth.adminIsAuth, adminControllers.getLanguageRu)

router.post('/admin/language-ru', isAuth.adminIsAuth, adminControllers.postLanguageRu)


router.get('/admin/language-en', isAuth.adminIsAuth, adminControllers.getLanguageEn)

router.post('/admin/language-en', isAuth.adminIsAuth, adminControllers.postLanguageEn)

router.get('/admin/language-uz', isAuth.adminIsAuth, adminControllers.getLanguageUz)

router.post('/admin/language-uz', isAuth.adminIsAuth, adminControllers.postLanguageUz)

module.exports = router