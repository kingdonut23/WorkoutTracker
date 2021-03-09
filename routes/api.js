const models = require("../models");



module.exports = function (app) {

  app.get("/api/workouts", function (req, res) {
    models.Workout.find({})
      .then(function (mongoWorkout) {
        res.json(mongoWorkout);
      }).catch(function (err) {
        res.status(400).json(err);
      });
  });


  app.post("/api/workouts", function (req, res) {
    models.Workout.create(req.body)
      .then(function (mongoWorkout) {
        res.json(mongoWorkout);
        console.log(mongoWorkout)
      }).catch(function (err) {
        res.status(400).json(err);
      });
  });

  app.get("/api/range", function (req, res) {
    models.Workout.aggregate([
      { $addFields: { TotalDuration: { $sum: "excercises.duration" } } }
    ]).then(function (mongoWorkout) {
      res.json(mongoWorkout);
      console.log(mongoWorkout)
    }).catch(function (err) {
      res.status(400).json(err);
    });

  })

}