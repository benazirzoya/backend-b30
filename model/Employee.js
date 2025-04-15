const mongoose= require('mongoose')
const bcrypt=require("bcrypt")

const EmployeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"],
        unique:true,
    },    
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,
    },
password:{
        type:String,
        required:[true,"password is required"],
        unique:true,
    }})

   /* EmployeeSchema.pre("save",async function(next)
    {
        const salt=await bcrypt.genSalt();
        this.password=await bcrypt.hash(this.password,salt);
    })*/
const EmployeeModel=mongoose.model("employees",EmployeeSchema)
module.exports=EmployeeModel