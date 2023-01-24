const mongoose=require('mongoose');
const { isMail}=require("validator");
const bcrypt=require("bcrypt");

const UserSchema=new mongoose(
    {
        firstName:{
            type:String,
            required:true,
            trim:true,
            minHeight:3,
            maxHeight: 30,
            unique:true,
        },
        lastName:{
            type:String,
            required:true,
            trim:true,
            minHeight:3,
            maxHeight: 30,
            unique:true,
        },
        email:{
            type:String,
            required:true,
            validate:[isMail],
            unique:true,
            lowercase:true,
        },
        password:{
            type:String,
            required:true,
            required:true,
            min:3,
            max:1024
        },
    },{
        timestamps:true
    }
);

// cryptage password 
UserSchema.pre("save",async function(next){   
    const salt=await bcrypt.genSalt();
    this.password=await bcrypt.hash(this.password,salt);
    next();
})

module.exports=mongoose.model("User",UserSchema);