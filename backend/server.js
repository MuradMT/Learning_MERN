"use strict";
require('dotenv').config();
const express= require('express');

//creates express app
const app=express();

//middleware
app.use((req,res,next)=>{
     console.log(req.path, req.method);
     next();
});

//routes
app.get("/",(req,res)=>{
    res.json({message:"Welcome to app"});
});

//listen for requests
app.listen(process.env.PORT,()=>{
    console.log('Listening on port ',process.env.PORT);
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
//#endregion