import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    username:{
        type:string,
        required:true,
        unique:true,
        lowercase:true

    },
    email:{
        type:string,
        required:true,
        unique:true,
        lowercase:true

    },
    password:{
        tyep:string,
        required:true
    }
},{timestamps:true});
export const user = mongoose.Schema("user",userSchema)