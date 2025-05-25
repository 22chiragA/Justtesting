import mongoose from 'mongoose'
const todoSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true,

    },
    complete:{
        type:Boolean
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    subTodos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"sub"
        }
    ]

    
},{timestamps:true})
export const todo = mongoose.model('todo',todoSchema);