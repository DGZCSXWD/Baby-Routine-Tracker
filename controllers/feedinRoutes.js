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

    const plainData = feedingData.map((record) => {
      const plainRecord = record.get({ plain: true });
      plainRecord.time = new Date(plainRecord.time).toLocaleString();
      return plainRecord;
    });

    res.render("feed", {
      feedingData: plainData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/feed", withAuth, async (req, res) => {
  try {
    const newFeeding = await Feeding.create({
      type: req.body.type,
      quantity_ml: req.body.quantity_ml,
      time: new Date(),
      user_id: req.session.user_id,
    });

    res.status(200).json(newFeeding);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
