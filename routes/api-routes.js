//db
const db = require('../models')
module.exports = (app) => {

  //////Workout Routes//////
  //get all
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (err, workouts) => {
      if (err) {
        console.log(err);
      } else {
        res.json(workouts)
      }
    });
  });
  //add excerise, set id, push to model, set true
  app.put("/api/workouts/:workout", ({ params, body }, res) => {
    db.Workout.findOneAndUpdate({ _id: params.id },
      { $push: { excercises: body } },
      { upsert: true, useFindandModify: false },
      updatedWorkout => {
        res.json(updatedWorkout);
      })
  });
  //create new workout
  app.post('/api/workouts', (req, res) => {
    db.Workout.create({}).then(newWorkout => {
      res.json(newWorkout);
    });
  });

}
// ner

// const router = require('express').Router();
// const workout = require('../models/workout.js');

// router.get('/api/workouts', (req, res) => {
//   workout.find({})
//     .then(workout => {
//       res.json(workout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.get('/api/workouts/range', (req, res) => {
//   workout.find({}).limit(7)
//     .then(workout => {
//       res.json(workout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.post('/api/workouts', (req, res) => {
//   workout.create({})
//     .then(workout => {
//       res.json(workout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.put('/api/workouts/:id', (req, res) => {
//   console.log(req.params.id);
//   workout.findByIdAndUpdate(
//     req.params.id, {
//     $push: { exercises: req.body }
//   },
//     {
//       new: true,
//       runValidators: true
//     })
//     .then(workout => {
//       console.log(workout);
//       res.json(workout);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(400).json(err);
//     });
// });


// module.exports = router;