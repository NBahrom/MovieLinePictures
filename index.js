const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const appRoutes = require('./routes/app')
const adminRoutes = require('./routes/admin')

const sequelize = require('./util/database')
const languageRu = require('./models/languageRu')
const languageUz = require('./models/languageUz')
const languageEn = require('./models/languageEn')
const videoProducts = require('./models/videoProducts')
const adminUser = require('./models/adminUsers')

const session = require('express-session')
const MySQLStore = require('express-mysql-session')(session);
const flash = require('connect-flash')
const cookieParser = require("cookie-parser");
const csurf = require('tiny-csrf');
const CryptoJS = require("crypto-js");
const mySecret = 'secretis1234561209'


const store = new MySQLStore({
    host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'Baxa9229',
	database: 'MLP',
    // Whether or not to automatically check for and clear expired sessions:
	clearExpired: true,
	// How frequently expired sessions will be cleared; milliseconds:
	checkExpirationInterval: 900000,
	// The maximum age of a valid session; milliseconds:
	expiration: 86400000,
})

// const store = new MySQLStore({
//     host: 'localhost',
// 	port: 3306,
// 	user: 'farruhon_mlp_user',
// 	password: 'mlp_user_9229',
// 	database: 'farruhon_mlp',
//     // Whether or not to automatically check for and clear expired sessions:
// 	clearExpired: true,
// 	// How frequently expired sessions will be cleared; milliseconds:
// 	checkExpirationInterval: 900000,
// 	// The maximum age of a valid session; milliseconds:
// 	expiration: 86400000,
// })

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser("cookie-parser-secret"));
app.use(session({secret: mySecret, resave: false, saveUninitialized:false, store: store}))
app.use(csurf("123456789iamasecret123456789look"))
app.use(flash())

app.use(appRoutes)
app.use(adminRoutes)

const port = process.env.PORT || 3000 

sequelize
//  .sync({force: true})
    .sync()
    .then(res => {
        return adminUser.findByPk(1)
    })
    .then(admin => {
        if (!admin) {
            return adminUser.create({id: 1, email: 'adminadmin@gamil.com', password: CryptoJS.AES.encrypt('admin9229', mySecret).toString()})
        }
        return admin
    })
    .then(res => {
        app.listen(port)
    })
    .catch(err => {
        console.log(err);
    })

