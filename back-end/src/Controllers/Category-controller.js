// controller
const categoryModel=require("../Models/Category-model");

// get one category
module.exports.AddOneCategory=async(req,res)=>{
    const {title,description} =req.body

    const newCategoryModel=new categoryModel(
        {
            title,
            description
        }
    );

    await newCategoryModel.save().then(docs=>{
        console.log("yes");
    })

}

// get all category
module.exports.getAllCategory=async(req,res)=>{
    await categoryModel.find()
        .then(docs=>{
            res.status(200).json(docs);
        })
}

// get one category
module.exports.getOneCategory=async(req,res)=>{}

// delete one category
module.exports.delteAllCategory=async(req,res)=>{}

// delete one category
module.exports.deleteOneCategory=async(req,res)=>{}

// update one category
module.exports.updateOneCategory=async(req,res)=>{}
