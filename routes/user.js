import express from "express"
const router = express.Router()
import User from "../model/user.js";
router.get('/',async(req,res)=>{
    try{
    
      const allUser = await User.find() 
    res.json(allUser)
    
    
    }
    
    catch(err){
    res.status(404).json({error:"there was error"})
    
    }
    })
    
    
    router.get('/:age',async(req,res)=>{
        const age = parseInt(req.params.age)
    
    try{
      const userWithAge = await User.find({age:age}) 
      if(userWithAge.length>0){
        res.json(userWithAge)
      }
    
    
    else{
        res.json({message:"not found this age in the database"})
    }
    }
    
    catch(err){
    res.status(404).json({error:err})
    
    }})
    
    
    router.post('/',async(req,res)=>{
    
        try{
    const data = req.body
    const newUser = new User(data)
    const savedUser = await newUser.save()
    console.log("user data is saved")
    res.status(200).json(savedUser)
    
        }
    
        catch(err){
    
    console.log(err)
    res.status(500).json(err)
    
        }
    
    })

   router.put('/:id',async(req,res)=>{

try{
const  userId  = req.params.id 
const updatePersonData = req.body
const response =  await User.findByIdAndUpdate(userId,updatePersonData,{
new:true , 
runValidators:true,
    
}

)
console.log("data is updatated")

res.status(200).json(response)

if(!response){
    res.status(404).json({message:"person not found in the database"})
    
    }


}
catch(err){
res.status(500).json({message:err})

}

   }) 

    export default router