import express from 'express'
import mongoose from 'mongoose'

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT,()=>{
    console.log(`This server is running on port ${PORT}`)
})




mongoose.connect('mongodb+srv://senthilmilitant:xODEvzoW1FDNPncm@cluster0.5ephglg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'))
  .catch(()=>{
    console.log(`connection failed!`)
  })