//index.js

import mongoose from 'mongoose';
import express from "express";
import todosRoute from "./routes/toDoRoutes.js";
import {  mongoDbURL, PORT } from "./config.js";
import cors from 'cors';

const app = express();

//Middleware for parsing request body
app.use(express.json());
//Middleware for handling CORS
app.use(cors());


app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome')
});
//tells our app to use the todosRoute router whenever a request's path starts with /api/todos.
app.use('/api/todos', todosRoute);
  
// Connect to database
mongoose.connect(mongoDbURL)
    .then(()=> {
        console.log('App connected to database')
        //  Check if the server is running
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });

    })
    .catch((error) =>{
        console.log(error);
    });
