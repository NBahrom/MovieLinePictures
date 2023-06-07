exports.adminIsAuth = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.redirect('/admin/signIn')
    }

    next()
}