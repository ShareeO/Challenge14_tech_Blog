const router = require("express").Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./homeRoutes.js');

router.use("/api", require("./apiRoutes"));
router.use("/", require("./homeRoutes"));

module.exports = router;