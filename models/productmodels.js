import mongoose, { Schema } from 'mongoose'

const ProductSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"please enter the product name"]
        },
        quantity:{
            type:Number,
            required: true,
            default:0
        },
        price:{
            type:Number,
            required: true,
            default:0
        },
        image:{
            type:String,
            required:false,
            default:0
        }
    },
    {
        timestamps:true
    }
)
const Product = mongoose.model('product',ProductSchema)

export default Product