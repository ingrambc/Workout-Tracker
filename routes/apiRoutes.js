//required modules
const router = require("express").Router();
const Workouts = require("../models/workouts.js");

//get all workouts
router.get("/api/workouts", (req, res) => {
  Workouts.find()
      .then(data => {
          res.json(data);
      }).catch(err => {
          res.status(400).json(err);
      });
});

//post a new workout document and get 
router.post("/api/workouts", (req, res) => {
  Workouts.create(req.body)
      .then(data => {
          console.log("Returned Create DATA");
          console.log(data);
          res.json(data);
      })
      .catch(err => {
          res.status(400).json(err);
      });
});

//delete a workout
router.delete("/api/workouts", ({ body }, res) => {
  Workouts.findByIdAndDelete(body.id)
      .then(() => {
          res.json(data);
      }).catch(err => {
          res.status(400).json(err);
      });
});

//update a workout
router.put("/api/workouts/:id", (req, res) => {
    console.log("ENTERED UPDATE");
    console.log(req.params);
    console.log(req.body);
  Workouts.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body}})
      .then(data => {
          res.json(data);
      }).catch(err => {
          res.status(400).json(err);
      });
});



router.get("/api/workouts/range", ({ query }, res) => {
  Workouts.find().limit(7)
      .then(data => {
          res.json(data);
      }).catch(err => {
          res.status(400).json(err);
      });
});



module.exports = router;