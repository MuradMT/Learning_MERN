import mongoose from "mongoose";

//Definition: A schema in Mongoose defines the structure of the documents in a MongoDB collection. 
const workoutSchema = new mongoose.Schema({
  title: {
    type: String,
    required:true
  },
  reps: {
    type: Number,
    required:true
  },
  load: {
    type: Number,
    required:true
  },
},{
    timestamps:true
});

//Definition: A model is a compiled version of the schema. It’s a class that allows interaction with the database.
export default mongoose.model('Workout',workoutSchema);