//database connection file
import mongoose, { mongo } from "mongoose";

const URL = 'mongodb+srv://mrlazyguy33:PassworD9816979102@cluster0.p0edv.mongodb.net/users'
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
