//npm init -y creates package.json(for dependency management)
//cls command cleans terminal
//npm i express installs essentials

const express= require('express');

//creates express app
const app=express();

//listen for requests
//node server.js ->starts server on port
const port=5000;
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});

//nodemon helps us to detect changes ,acts like dotnet watch
//npm i -g nodemon ,then call nodemon server.js
//if you encounter with error,then delete nodemon.ps1 file on npm file