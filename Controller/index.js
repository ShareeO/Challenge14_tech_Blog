const router = require("express").Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./homeRoutes.js');
const dashboardRoutes = require('./dashboardRoutes')

router.use("/api", require("./api/"));
router.use("/", require("./homeRoutes"));
router.use("/dashboard", require("./dashboardRoutes"));

module.exports = router;