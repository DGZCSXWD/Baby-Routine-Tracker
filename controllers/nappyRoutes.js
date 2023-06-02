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
    res.json(nappyData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/nappy", withAuth, async (req, res) => {
  try {
    const newNappyChange = await NappyChange.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newNappyChange);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
