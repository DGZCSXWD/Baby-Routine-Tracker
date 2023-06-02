const router = require("express").Router();
const Feeding = require("../models/Feeding");
const withAuth = require("../utilis/withAuth");

router.get("/feed", withAuth, async (req, res) => {
  try {
    const feedingData = await Feeding.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    res.json(feedingData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/feed", withAuth, async (req, res) => {
  try {
    const newFeeding = await Feeding.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newFeeding);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
