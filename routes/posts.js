var express = require('express');
var router = express.Router();
var checkAuth = require('../middlewares/check-auth');
var hasRole = require('../middlewares/has-role');
const posts = require('../controllers/post.js');


/* GET home page. */
router.get('/', checkAuth, function (req, res) {
    let route = req.baseUrl;
    posts.findAll(req, res, route);
});
router.get('/:id/edit', checkAuth, (req,res) => {
    let id = req.params.id;
    posts.find(req,res,id, 'post/update');
});

router.post('/:id/edit', checkAuth,(req,res)=>{
    let id = req.params.id;
    let post = req.body;
    if (post.save === '') {

    }
    else{

    }
});
router.get('/create', [checkAuth, hasRole(2)], (req, res) => {
    let route = req.baseUrl;
    res.render('post/create', {route: route});
});

router.get('/:id', checkAuth, (req, res) => {
    let id = req.params.id;
    posts.find(req, res, id, 'post/view');
})





router.post('/create', [checkAuth, hasRole(2)], (req, res) => {
    let post = req.body;
    if (post.publish)
        post.status = 2;
    else if (post.save)
        post.status = 1;

    posts.create(req, res, post);
});


module.exports = router;
