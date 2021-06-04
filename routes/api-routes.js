const Workout = require("../models/workout");

module.exports = function (app) {
        // Get all workouts
        app.get("/api/workouts", function (req, res) {
            Workout.find()
            .then(function(data) {
                console.log(data);
                res.json(data);
            });
        });
    
        // Add a new workout
        app.post("/api/workouts", function (req, res) {
            console.log(req.body);
    
            Workout.create({})
            .then(function(data) {
                res.json(data);
            });
        });
    
        app.put("/api/workouts/:id", function (req, res) {
            Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}})
            .then(function(data) {
                res.json(data);
            });
        });
    
        // Get workout in a specific range
        app.get("/api/workouts/range", function (req, res) {
            Workout.find()
            .then(function(data) {
                res.json(data)
            });
        });
    }