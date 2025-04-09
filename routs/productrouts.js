import express from "express"
import { creatproduct, 
        deleteproduct, 
        getallproduct, 
        getproductbyid, 
        updateproduct } from "../controller/productcontroler.js"



const router = express.Router()

//GET ALL PRODUCTS
router.get('/',getallproduct)

//GET PRODUCT BY ID
router.get('/:id',getproductbyid)

//CREAT PRODUCT BY ID
router.post('/',creatproduct)

//UPDATE PRODUCT 
router.put('/:id',updateproduct)

// DELETE PRODUCT
router.delete('/:id',deleteproduct)


export default router