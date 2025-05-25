import mongoose from 'mongoose'
const productSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    productImage:{
        type:String
    },
    price:{
        type:Number,
        default:0
    },
    stock:{
        default:0
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:category
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:user

    }

},{timestamps:true})

export const product = mongoose.model("product",productSchema)