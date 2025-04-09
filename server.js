import express, { json } from 'express';
import userRouter from './router/userRouter.js';
import dbConnection from './db/db.js';
import 'dotenv/config';
const app = express();



// Database connection
dbConnection();

// Middleware
app.use(json());

// Route
app.use("/api/user", userRouter);



// App Listening
const port = 3050 || process.env.PORT;
app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
});