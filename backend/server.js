"use strict";
import express from "express"; //this is module type
import mongoose from "mongoose";
import dotenv from "dotenv";
import workoutRoutes from './routes/workouts.js';

dotenv.config();

//const express= require('express'); alternative to import and it is commonjs type

//creates express app
const app = express();

//middlewares
app.use(express.json()); //to check http verb which contains some data like post request body

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
// app.get("/",(req,res)=>{
//     res.json({message:"Welcome to app"});
// });

app.use("/api/workouts", workoutRoutes);

//connect to db

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to db & Listening on port ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

//#region Extra Notes

//node server.js ->starts server on port

//npm init -y creates package.json(for dependency management)
//cls command cleans terminal
//npm i express installs essentials

//nodemon helps us to detect changes ,acts like dotnet watch
//npm i -g nodemon ,then call nodemon server.js
//if you encounter with error,then delete nodemon.ps1 file on npm file

//Create a script in package.json under scripts section,and call npm run "script name",
//It will run the command inside the script

//env file helps us to keep our secrets
//We need to install it,so npm i dotenv

//Mongo DB is no sql database.
//It provides cloud database.
//We call it cluster,each cluster is deployed to cloud provider(such as aws,azure,or google cloud).
//Connection string example of mongo db:
//mongodb+srv://<user name>:<db_password>@mongodb.sdl5q.mongodb.net/

//Mongoose is an object data modelling(odm) and helps us to connect our backend to mongo db backend.
//npm i mongoose,then import

//#endregion
