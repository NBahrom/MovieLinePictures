

const languageEn = require('../models/languageEn')
const languageRu = require('../models/languageRu')
const languageUz = require('../models/languageUz')
const videoProducts = require('../models/videoProducts')

exports.getPageRu = (req,res,next) => {
    languageRu.findAll()
    .then(massive => {
        videoProducts.findAll()
        .then(videos => {
            res.render('site/index', {
                pageTitle: 'Movie line pictures',
                language: massive,
                languageCode: 'ru',
                videos: videos
            })
        })    
    })
}

exports.getPageUz = (req,res,next) => {
    languageUz.findAll()
    .then(massive => {
        videoProducts.findAll()
        .then(videos => {
            res.render('site/index', {
                pageTitle: 'Movie line pictures',
                language: massive,
                languageCode: 'uz',
                videos: videos
            })
        })
 
    })
}

exports.getPageEn = (req,res,next) => {
    languageEn.findAll()
    .then(massive => {
        videoProducts.findAll()
        .then(videos => {
            res.render('site/index', {
                pageTitle: 'Movie line pictures',
                language: massive,
                languageCode: 'en',
                videos: videos
            })
        })
    })
}