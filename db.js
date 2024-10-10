//database connection file
import mongoose, { mongo } from "mongoose";

const URL = 'mongodb://localhost:27017/users'
mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,     
   
})

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
