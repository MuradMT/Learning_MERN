import express from "express";
import {createWorkout,getWorkouts,getWorkout,deleteWorkout,updateWorkout} from "../controllers/workoutController.js";

//Purpose: Routes in Express.js define the endpoints (or paths) of your application
//and specify how the application should respond to client requests for each path.
const router = express.Router();

router.get("/", getWorkouts);

router.get("/:id", getWorkout);

router.post("/",createWorkout);

router.delete("/:id", deleteWorkout);

router.patch("/:id",updateWorkout);

// module.exports = router;
export default router;
