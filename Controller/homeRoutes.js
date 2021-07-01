const router = require("express").Router();


router.get("/", (req,res) =>{



    res.send("Hello from router")
})

router.get("/login", (req, res) => {

    res.render("login")
})

router.get("/signup", (req, res) => {

})


module.exports = router;