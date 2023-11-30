import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import groceryRoute from "./routes/groceryListRoute.js";
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome to MERN App");
});

app.use("/grocerylist", groceryRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("App connected to mongoDB");
        app.listen(PORT, () => {
            console.log("App is listening to port: " + PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });  