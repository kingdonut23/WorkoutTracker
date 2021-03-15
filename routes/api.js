const models = require("../models/");
const router = require("express").Router();


module.exports = function (router) {
    /// new workout
    router.post("/api/workouts", function (req, res) {
        models.Workout.create(req.body)
            .then(function (workout) {
                res.json(workout);
                console.log(workout)
            }).catch(function (err) {
                res.status(400).json(err);
            });
    });
    /// stop giving me trouble and work!
    // supposed to pull workouts
    router.get("/api/workouts", function (req, res) {
        models.Workout.find({})
            .then(function (workout) {
                res.json(workout);
            }).catch(function (err) {
                res.status(400).json(err);
            });
    });

    router.get("/api/workouts/range", function (req, res) {
        models.Workout.aggregate([
            { $addFields: { TotalDuration: { $sum: "$excercises.duration" } } }
        ]).then(function (workout) {
            res.json(workout);
            console.log(workout)
        }).catch(function (err) {
            res.status(400).json(err);
        });

    })

}