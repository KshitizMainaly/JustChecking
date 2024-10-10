import mongoose, { mongo } from "mongoose";
//schema

const userSchema = new mongoose.Schema({
name: {
type:String, 
required:true, 
unique :true,
},

age:{

type:Number, 
required:true, 

}




})

const   User =  mongoose.model('hero',userSchema)

export default User