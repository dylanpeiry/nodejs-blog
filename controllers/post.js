const db = require('../config/db');
const Post = db.posts;
const User = db.users;
const Tag = db.tags;
const Status = db.statuses;
const Op = require('sequelize').Op;


exports.create = (req, res, post) => {
    Post.create({
        title: post.title,
        content: post.content,
        idStatus: 1,
        idOwner: 1,
        idTag: 1
    }).then(post => {
        req.session.message = 'Article ajouté';
        res.redirect('/posts');
    })
};

exports.findAll = (req, res, route) => {
    Post.findAll({
        where: {
            [Op.or]: [{idStatus:2},{idOwner:req.session.user.idUser}]
        },
        include: [User, Tag]
    }).then(posts => {
        let response = {
            route: route,
        };
        if (posts.length === 0) {
            response['posts'] = false;
        } else {
            response['posts'] = posts
        }
        res.render('posts', response);
    })
};

exports.find = (req, res, id, renderedView) => {
    Post.findAll({
        where: {
            idPost: id
        },
        include: [User, Tag, Status]
    }).then(posts => {
        if (posts.length > 0) {
            res.render(renderedView, {post: posts[0]});
        } else {
            res.send('post existe pas');
        }
    })
};