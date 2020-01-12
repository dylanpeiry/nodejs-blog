module.exports = function (role) {
    return function (req, res, next) {
        if (req.session.user.idRole >= role) {
            next();
        } else {
            res.redirect('/');
        }
    }
};