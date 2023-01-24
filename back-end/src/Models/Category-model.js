const mongoose=require("mongoose");

const categorySchema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            minHeight: 3,
            unique:true
        },
        description:{
            type:String,
            minHeight:5,
            required:true,
        }
    },
    {
        timestamp:true
    }
);

module.exports=mongoose.model("category",categorySchema)