const router = require("express").Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');

router.use("/", require("./homeRoutes"))
router.use("/api", require("./api"))




module.exports = router;