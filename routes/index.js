var express = require('express');
var router = express.Router();
var checkAuth = require('../middlewares/check-auth');
var hasRole = require('../middlewares/has-role');
const users = require('../controllers/user.js');


/* GET home page. */
router.get('/', checkAuth, function (req, res) {

    res.redirect('/posts');
});

router.get('/login', (req, res) => {
    let route = req.baseUrl;
    res.render('login', {route:route});
});

router.get('/admin',[checkAuth,hasRole(4)], (req, res) => {
    let route = req.baseUrl;
    res.render('admin', {route:route});
});

router.post('/login', (req, res) => {
    let post = req.body;

    users.checkLogin(req, res, post.username, post.password);
});

module.exports = router;
