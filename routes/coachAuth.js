const router = require("express").Router();
const Coach = require("../models/Coach");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    //create new user
    const newCoach = new Coach({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });

    //save user and respond
    const coach = await newCoach.save();
    res.status(200).json(coach);
  } catch (err) {
    res.status(500).json(err)
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const coach = await Coach.findOne({ email: req.body.email });
    !coach && res.status(404).json("user not found");

    const validPassword = req.body.password==coach.password;
    !validPassword && res.status(400).json("wrong password")

    res.status(200).json(coach)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;