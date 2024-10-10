//database connection file
import mongoose, { mongo } from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const URL = process.env.DB_URL

mongoose.connect(URL)

const DB =mongoose.connection
DB.on('connected',()=>{
console.log("connected to mongodb server")


})
DB.on('disconnected',()=>{
console.log("disconnected from  mongodb server")


})


DB.on('error',( )=>{
console.log("there is error in connecting")

})
console.log(typeof(DB))
export default DB
