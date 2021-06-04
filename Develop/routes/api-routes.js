const db = require("../models");

module.exports = function (app) {

    //GET route for getting workouts
    app.get("/api/workouts", function (req, res) {
        db.Workout.find({}).then(function (dbWorkout) {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        })
    })

    //GET route for a specific workout
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).then(function (dbWorkout) {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    })

    //GET route for a specific workout by ID
    app.get("/api/workouts/:id", function (req, res) {
        var id = req.params.id;
        db.Workout.findById(id, function (err, dbWorkout) {
        }).catch(err => {
            res.json(err);
        });
    })
}