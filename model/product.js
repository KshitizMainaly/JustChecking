import mongoose from "mongoose";

//schema 

const productSchema  =  new mongoose.Schema({
name:{
type:String, 
required:true
    
},

price:{
type:Number, 
required:true, 

}



})


const Product = mongoose.model('Prodcuct',productSchema)
export default Product