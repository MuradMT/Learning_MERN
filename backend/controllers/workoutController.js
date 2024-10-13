//Purpose: Controllers are a more advanced concept used to organize your application by separating
// the business logic from the routing logic.
import Workout from "../models/workout.js";
import mongoose from "mongoose";

const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, reps, load });
    return res.status(200).json(workout);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getWorkouts = async (req, res) => {
  const workouts=await Workout.find({}).sort({createdAt:-1});
  return res.status(200).json(workouts);
};

const getWorkout = async (req, res) => {
    const {id}=req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error:'No such workout'});
    }

    const workout=await Workout.findById(id);

    return !workout 
    ? res.status(404).json({error:"No such error"})
    : res.status(200).json(workout);

  };

export {createWorkout,getWorkouts,getWorkout};
