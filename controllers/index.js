const router = require("express").Router();

const userRoutes = require("./userRoutes");
const nappyRoutes = require("./nappyRoutes");
const feedinRoutes = require("./feedinRoutes");
const homeRoutes = require("./homeRoutes");

router.use(userRoutes);
router.use(nappyRoutes);
router.use(feedinRoutes);
router.use(homeRoutes);

module.exports = router;
