import mongoose from 'mongoose'

const orderitemSchema = new mongoose.Schema({productId:
{
    type:mongoose.Schema.Types.ObjectId,
    ref:"product"
},
quantity:{
    type:Number,
    required:true
}
})



const orderSchema = new mongoose.Schema({
    order:{
        type:Number,
        required:true,
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:user

    },
    orderitemSchema:
    {
        type:[orderitemSchema]

    },
    status:{
        type:String,
        enum:["PENDING","PROCESSING","DELIVERED"],
        default:"PENDING"

    }





},{timestamps:true})

export const order = mongoose.model("order",orderSchema)