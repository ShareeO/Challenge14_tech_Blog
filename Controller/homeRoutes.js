const router = require("express").Router();
const sequelize = require('../config/connection');

router.get("/", (req,res) =>{



    res.render("home")
})

router.get("/login", (req, res) => {

    res.render("login")
})

router.get("/signup", (req, res) => {

})


module.exports = router;