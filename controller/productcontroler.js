 import Product from "../models/productmodels.js";

 //GET ALL PRODUCT
 export const getallproduct = async(req,res)=>{
    try {
       const products = await Product.find({})
      res.status(200).json(products)
    } catch (error) {
      res.status(500).json({message:error.message})
    }
  }

//GET ONE PRODUCT BY ID
export const getproductbyid = async(req,res)=>{
    try {
      const{id}= req.params
       const product = await Product.findById(id)
      res.status(200).json(product)
    } catch (error) {
      res.status(500).json({message:error.message})
    }
  }

// CREAT A NEW PRODUCT
export const creatproduct = async(req,res)=>{
    try {
       const product = await Product.create(req.body)
      res.status(200).json(product)
    } catch (error) {
      res.status(500).json({message:error.message})
    }
}

// UPDATE PRODUCT BY EXISTING PRODUCT
export const updateproduct = async(req,res)=>{
    try {
         const {id}= req.params
         const product = await Product.findByIdAndUpdate(id,req.body)

        if(!product) {
         return res.status(500).json({message:"Product not found"})
        }
         const UpdatedProduct = await Product.findById(id)
         res.status(200).json(UpdatedProduct)
    } catch (error) {
     res.sendStatus(500).json({message:error.message})
    }
}

//DELETE PRODUCT 
export const deleteproduct = async(req,res)=>{
    try {
      const {id} = req.params
      const product = await Product.findByIdAndDelete(id)
      if(!product){
          return res.status(404).json({message:"Product not found"})
      }
      res.status(202).json({message:"Product deleted sucessfully"})
     
    } catch (error) {
     res.status(500).json({message:error.message})
    }
}

