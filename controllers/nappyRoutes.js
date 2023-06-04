const router = require("express").Router();
const NappyChange = require("../models/NappyChange");
const withAuth = require("../utilis/withAuth");

router.get("/nappy", withAuth, async (req, res) => {
  try {
    const nappyData = await NappyChange.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const plainData = nappyData.map((record) => {
      const plainRecord = record.get({ plain: true });
      plainRecord.time = new Date(plainRecord.time).toLocaleString();
      return plainRecord;
    });

    res.render("nappy", {
      nappyData: plainData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/nappy", withAuth, async (req, res) => {
  try {
    const newNappyChange = await NappyChange.create({
      type: req.body.type,
      time: new Date(),
      user_id: req.session.user_id,
    });

    res.status(200).json(newNappyChange);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
