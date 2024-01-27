import cors from "cors";
import {json} from 'body-parser';
import express from 'express';
import mongoose from "mongoose";
import consola from "consola";

// Import Application Constants 
import {DB, PORT} from "./constants"; 

const app = express; 

const main = () => {
    try{
        // connect with database
        mongoose.connect(DB, {
            useNewURLParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        consola.success("DATABASE CONNECTED...");
        // start app listening for request on server 
    } catch (err) {}
};

main(); 