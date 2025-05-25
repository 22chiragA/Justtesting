import mongoose from 'mongoose'

const Sub_todo_Schema = new mongoose.Schema(
    {
        content:
        {
            type:String,
            required: true


        },
        complete:{
            type:Boolean,
            default:false
        }


    }
,{timestamps : true}
)
export const sub = mongoose.model('sub',Sub_todo_Schema);