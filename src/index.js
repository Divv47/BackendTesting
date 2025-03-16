//require ('dotenv').config({path: './env'});
import dotenv from "dotenv"
import mongoose, { connect } from 'mongoose';
import { DB_Name } from './constants';
import connectDB from './db/index.js';



dotenv.config({
    path: './path'
})




connectDB()



/*
import express from "express"
const app = express();


(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/$
            {DB_NAME}`)
            app.on("error",(error)=>{
                console.log("ERROR",error);
            })
            app.listen(process.env.PORT,()=>{
                console.log(`app is listening on port ${process.env.PORT}`);
                
            })
    } catch(error){
        console.log("ERROR:",error);
        throw err
    }
})()

*/