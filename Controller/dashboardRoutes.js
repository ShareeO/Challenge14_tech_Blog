const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require('../models');
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
    Post.findAll({
    attributes: [
        "id",
        "title",
        "created_at"
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
        res.render("dashboard", {
        layout: "dashboard",
        posts,
        loggedIn: req.session.loggedIn,
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get("/edit/:id", withAuth, (req, res) => {
    Post.findOne({
    attributes: [
        "id",
        "title",
        "created_at"
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
        res.render("edit-post", {
        layout: "dashboard",
        posts,
        loggedIn: req.session.loggedIn,
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err); 
    });
});

router.get("/new", withAuth, (req, res) => {
    res.render("new-post", {
        layout: "dashboard"
        });
    })

module.exports = router;