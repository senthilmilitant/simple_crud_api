import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import router from './routs/productrouts.js'

dotenv.config()
const app = express()
const PORT = 3000

//use middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//DEFAULT ROUTES
app.get('/', (req, res) => {
  res.send('Hello World!')
});

//PRODUCT API ROUTES
app.use("/api/products",router)


// mongoose.connect(process.env.MONGODB_URI)
//   .then(() =>{
//     console.log('MONGO DB Connected!')
//     app.listen(PORT,()=>{console.log(`This server is running on port ${PORT}`)})
//   })
//   .catch((error)=>{
//     console.log(error.message)
//   })
 const connectdb = async()=>{
    try {
      mongoose.connect(process.env.MONGODB_URI)
      console.log('MONGO DB Connected!')
      app.listen(PORT,()=>{console.log(`This server is running on port ${PORT}`)})
      
    } catch (error) {
      console.log(error.message)
    }
  }
  connectdb()