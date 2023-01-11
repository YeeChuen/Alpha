const User = require("../models/User");
const router = require("express").Router();

//Add Workout
router.put("/:id/addExercise", async(req,res) => {
    if (req.body.userId == req.params.id) {
        /*try {
            const currentUser = await User.findById(req.body.userId);

            await currentUser.updateOne({ $push: { workouts: req.body.workout } });
            
            res.status(200).json("Exercise has been added");

        } catch (err) {
          res.status(500).json(err);
        }*/

        const currentUser = await User.findById(req.body.userId);

        await currentUser.updateOne({ $push: { workouts: req.body.thing } });
            
        res.status(200).json("Exercise has been added");
    }
});

module.exports = router;