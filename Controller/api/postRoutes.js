const router = require('express').Router();
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth')

const { Post } = require("../../models")

// get all posts
router.get('/', (req, res) => {
    Post.findAll({
    attributes: [
        'id',
        'title',
        'created_at',
    ],
    include: [
        {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
            model: User,
            attributes: ['username']
        }
        },
        {
        model: User,
        attributes: ['username']
        }
    ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// update posts by ID
router.put("/:id", withAuth, (req, res) => {
    Post.update({
            title: req.body.title,
            body: req.body.body,
        }, {
            where: {
                id: req.params.id,
            },
        })
        .then((dbPostData) => {
            if (!dbPostData) {
                res.status(404).json({
                    message: "No post found with this id"
                });
                return;
            }
            res.json(dbPostData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Delete a post by ID
router.delete("/:id", withAuth, (req, res) => {
    Post.destroy({
            where: {
                id: req.params.id,
            },
        })
        .then((dbPostData) => {
            if (!dbPostData) {
                res.status(404).json({
                    message: "No post found with this id"
                });
                return;
            }
            res.json(dbPostData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Create a post
router.post("/", (req, res) => {
Post.create({
    title: req.body.title,
    body: req.body.post_content,
    user_id: req.session.user_id
})
.then((dbPostData) => {
    if (!dbPostData) {
        res.status(404).json({
            message: "Could not create post"
        });
        return;
    }
    res.json(dbPostData);
})
.catch((err) => {
    console.log(err);
    res.status(500).json(err);
});
});


module.exports = router;
