import express, { json, response } from "express";
import userRoutes from "./routes/user.js";
import DB from "./db.js";
import productRoutes from "./routes/product.js";
const app = express();
app.use(express.json())

app.use('/user',userRoutes)
app.use('/product',productRoutes)

app.get('/',(req, res)=>{
res.json({message:"hello user"})

})


app.listen(3000,()=>{

console.log("app is listening")

})