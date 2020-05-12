let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let workoutSeed = [
  {
    day: new Date().setDate(new Date().getDate() - 7),
    exercises: [
      {
        type: "resistance",
        name: "Push Press",
        duration: 20,
        weight: 120,
        reps: 12,
        sets: 5
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate() - 7),
    exercises: [
      {
        type: "resistance",
        name: "Lat Pulldown",
        duration: 30,
        weight: 250,
        reps: 8,
        sets: 3
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate() - 4),
    exercises: [
      {
        type: "resistance",
        name: "Floor Press",
        duration: 30,
        weight: 250,
        reps: 6,
        sets: 3
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate() - 7),
    exercises: [
      {
        type: "cardio",
        name: "Sprinting",
        duration: 15,
        distance: 20
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate() - 6),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 285,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate() - 4),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate() - 5),
    exercises: [
      {
        type: "resistance",
        name: "Leg Press",
        duration: 20,
        weight: 350,
        reps: 15,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate() - 3),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 35,
        weight: 250,
        reps: 8,
        sets: 3
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate() - 2),
    exercises: [
      {
        type: "resistance",
        name: "Seated Press",
        duration: 20,
        weight: 225,
        reps: 10,
        sets: 3
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate() - 2),
    exercises: [
      {
        type: "cardio",
        name: "running",
        duration: 30,
        distance: 2
      }
    ]
  }
];

db.Workout.deleteMany({})
  .then(() => db.Workout.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });