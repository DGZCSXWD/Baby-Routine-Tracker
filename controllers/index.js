const router = require("express").Router();

const userRoutes = require("./userRoutes");
const nappyRoutes = require("./nappyRoutes");
const feedinRoutes = require("./feedinRoutes");

router.use(userRoutes);
router.use(nappyRoutes);
router.use(feedinRoutes);

module.exports = router;
