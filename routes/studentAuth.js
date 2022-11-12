const router = require("express").Router();
const Student = require("../models/Student");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    //create new user
    const newStudent = new Student({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });

    //save user and respond
    const student = await newStudent.save();
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json(err)
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const student = await Student.findOne({ email: req.body.email });
    !student && res.status(404).json("user not found");

    const validPassword = req.body.password==student.password;
    !validPassword && res.status(400).json("wrong password")

    res.status(200).json(student);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;