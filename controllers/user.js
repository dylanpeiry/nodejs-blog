const db = require('../config/db');
const User = db.users;

exports.findAll = (req, res) => {
    User.findAll().then(users => {
        res.render('users', {users: users});

    })
};

exports.checkLogin = (req, res, username, password) => {
    User.findAll({
        where: {
            username: username,
            password: password
        }
    }).then(users => {
        if (users.length > 0){
            req.session.user = users[0];
            res.redirect('/');
        }else{
            res.send('Bad user/pass');
        }
    })
};