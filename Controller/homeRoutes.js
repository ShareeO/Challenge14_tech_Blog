const router = require("express").Router();
const { Post, User, Comment } = require('../models');

router.get("/", (req, res) => {
    Post.findAll({
    attributes: [
        "id",
        "title",
        "created_at",
        "body"
    ],
    include: [
        {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
            model: User,
            attributes: ["username"],
        },
        },
        {
        model: User,
        attributes: ["username"],
        },
    ],
    })
    .then((dbPostData) => {
        const posts = dbPostData.map((post) => post.get({ plain: true }));

        res.render("home", {
        posts,
        loggedIn: req.session.loggedIn,
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get("/post/:id", (req, res) => {
Post.findByPk(req.params.id, {
    attributes: [
        "id",
        "title",
        "created_at",
        "body"
    ],
    include: [
        {
            model: Comment,
            include: [User],
        },
        User
    ],
})
.then((dbPostData) => {
    if(!dbPostData){
        res.status(404).end()
    } else {
        const post = dbPostData.get({ plain: true});

        res.render("view-post", {post})
    }
    

})
})



router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
        }
    
        res.render('login');
    });

router.get("/signup", (req, res) => {
    res.render('signup');
});

module.exports = router;
