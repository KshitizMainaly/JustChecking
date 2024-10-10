import express from "express";
import Product from "../model/product.js";
const router = express.Router()


router.post('/',async(req,res)=>{ 

    try{
    
    const data = req.body
    const newProduct = new Product(data)
        const saveProduct = await newProduct.save()
    console.log("product data is saved")
    
    res.status(200).json(saveProduct)
    
    }
    
    catch(err){
    res.status(500).json({error:"live server error"})
    
    
     }
    
    })
    
    router.get('/',async(req,res)=>{
        try{
        
          const allProduct= await Product.find() 
        res.json(allProduct)
        
        
        }
        
        catch(err){
        res.status(404).json({error:err})
        
        }
        })
       export default router 