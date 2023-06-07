const CryptoJS = require("crypto-js");

const languageRu = require('../models/languageRu')
const languageUz = require('../models/languageUz')
const languageEn = require('../models/languageEn')
const videoProducts = require('../models/videoProducts')
const adminUser = require('../models/adminUsers')
const mySecret = 'secretis1234561209'

exports.getSignIn = (req,res,next) => {
    res.render('admin/signIn', {
        pageTitle: 'Админ панель',
        error: req.flash('signError'),
        csrfToken: req.csrfToken()
    })
}

exports.postSignIn = (req,res,next) => {
    const email = req.body.email
    const password = req.body.password

    adminUser.findOne({where: { email: email}})
    .then(user => {
        let decryptedPassword
        if (user != null) {
            const bytes = CryptoJS.AES.decrypt(user.dataValues.password, mySecret);
            const decrypted = bytes.toString(CryptoJS.enc.Utf8);
            decryptedPassword = decrypted
        }
        if (user != null && user.dataValues.email == email && password == decryptedPassword) {
            req.session.isLoggedIn = true
            res.redirect('/admin')
        }else{
            req.flash('signError', 'Email или Пароль не правильно введен')
            res.redirect('/admin/signIn')
        }
    })
}

exports.getAdmin = (req, res, next) => {
    videoProducts.findAll()
    .then(videos => {
        res.render('admin/mainPage', {
            pageTitle: 'Админ панель',
            csrfToken: req.csrfToken(),
            path:'/admin',
            videos: videos
        })
    })
   
}

exports.postDeleteVideo = (req, res, next) => {
    const id = req.params.id

    videoProducts.findByPk(id)
    .then(video => {
        return video.destroy()
    })
    .then(response => {
        res.redirect('/admin')
    })
}

exports.getAddVideos = (req, res, next) => {
    res.render('admin/addVideos', {
        pageTitle: 'Добавление видео',
        path:'/admin',
        csrfToken: req.csrfToken(),
        video: null
    })
}

exports.postAddVideos = (req, res , next) => {
    const videoIframe = req.body.videoIframe
    const videoNameRu = req.body.videoNameRu
    const videoNameEn = req.body.videoNameEn
    const videoNameUz = req.body.videoNameUz
    const videoSubTitleRu = req.body.videoSubTitleRu
    const videoSubTitleEn = req.body.videoSubTitleEn
    const videoSubTitleUz = req.body.videoSubTitleUz
    

    videoProducts.create({
        videoUrl: videoIframe,
        titleRu: videoNameRu,
        titleEn: videoNameEn,
        titleUz: videoNameUz,
        subTitleRu: videoSubTitleRu ,
        subTitleUz: videoSubTitleUz,
        subTitleEn: videoSubTitleEn
    })
    .then(response => {
        res.redirect('/admin')
    })
    .catch(err => {
        console.log(err);
    })
}

exports.getEditVideos = (req,res,next) => {
    const id = req.params.id

    videoProducts.findByPk(id)
    .then(video => {
        res.render('admin/addVideos', {
            pageTitle: 'Изменение видео',
            csrfToken: req.csrfToken(),
            path:'/admin',
            video: video
        })
    })
   
}

exports.postEditVideos = (req, res , next) => {
    const id = req.params.id

    const videoIframe = req.body.videoIframe
    const videoNameRu = req.body.videoNameRu
    const videoNameEn = req.body.videoNameEn
    const videoNameUz = req.body.videoNameUz
    const videoSubTitleRu = req.body.videoSubTitleRu
    const videoSubTitleEn = req.body.videoSubTitleEn
    const videoSubTitleUz = req.body.videoSubTitleUz

    videoProducts.findByPk(id)
    .then(video => {
        video.videoUrl = videoIframe,
        video.titleRu = videoNameRu,
        video.titleEn = videoNameEn,
        video.titleUz = videoNameUz,
        video.subTitleRu = videoSubTitleRu,
        video.subTitleEn = videoSubTitleEn,
        video.subTitleUz = videoSubTitleUz
        return video.save()
    })
    .then(respnse => {
        res.redirect('/admin')
    })
}


exports.getLanguageRu = (req, res,next) => {
    languageRu.findAll()
    .then(language => {
        res.render('admin/languagePage', {
            pageTitle: 'Изменение языка Ru',
            path:'/admin/language-ru',
            csrfToken: req.csrfToken(),
            language: language
        })
    })
    
}

exports.postLanguageRu = (req, res,next) => {
    const id = req.body.id
    const text = req.body.text

    languageRu.findByPk(id)
    .then(language => {
        language.text = text
        return language.save()
    })
    .then(response => {
        res.redirect('/admin/language-ru')
    })
    .catch(err => {
        console.log(err);
    })
}

exports.getLanguageEn = (req, res,next) => {
    languageEn.findAll()
    .then(language => {
        res.render('admin/languagePage', {
            pageTitle: 'Изменение языка En',
            path:'/admin/language-en',
            csrfToken: req.csrfToken(),
            language: language
        })
    })
    
}

exports.postLanguageEn = (req, res,next) => {
    const id = req.body.id
    const text = req.body.text

    languageEn.findByPk(id)
    .then(language => {
        language.text = text
        return language.save()
    })
    .then(response => {
        res.redirect('/admin/language-en')
    })
    .catch(err => {
        console.log(err);
    })
}

exports.getLanguageUz = (req, res,next) => {
    languageUz.findAll()
    .then(language => {
        res.render('admin/languagePage', {
            pageTitle: 'Изменение языка Uz',
            path:'/admin/language-uz',
            csrfToken: req.csrfToken(),
            language: language
        })
    })
    
}

exports.postLanguageUz = (req, res,next) => {
    const id = req.body.id
    const text = req.body.text

    languageUz.findByPk(id)
    .then(language => {
        language.text = text
        return language.save()
    })
    .then(response => {
        res.redirect('/admin/language-uz')
    })
    .catch(err => {
        console.log(err);
    })
}