// Article controller
const articleModel=require("../Models/Article-model");

// get all article
module.exports.getAllArticle=async(req,res)=>{
    await articleModel.find().then(docs=>{
        res.status(200).json(docs)
    })
}

// get one article
module.exports.getOneArticle=async(req,res)=>{}

// add one article
module.exports.addOneArticle=async(req,res)=>{
    if(req.files===null)
        return res.status(400).json({msg:"no file upload"});

    const {title,category,content}=req.body;
    const img=req.files.image;
    const imgName=new Date().getTime()+img.name;
    const imgUrl=`/uploads/${imgName}`

    const newArticleModel=new articleModel({
        title:title,
        content:content,
        image:imgUrl,
        category:category
    })

    await img.mv(`${__dirname}/../../../front-end/public/uploads/${imgName}`,err=>{
        if(err){
            return res.status(500).send(err)
        }
        newArticleModel.save().then(docs=>{
            res.status(200).json({"msg":"successFull"})
        })
    })
    

}

// delete one article
module.exports.deleteOneArticle=async(req,res)=>{}

// update one article
module.exports.updateOneArticle=async(req,res)=>{}

// like one article
module.exports.likeOneArticle=async(req,res)=>{}

// unlike one article
module.exports.unlikeOneArticle=async(req,res)=>{}

// add comments one article
module.exports.addCommentsOneArticle=async(req,res)=>{}

// delete one comments article
module.exports.deleteCommentsOneArticle=async(req,res)=>{}

// update one comments article
module.exports.updateCommentsOneArticle=async(req,res)=>{}

// partages  one article
module.exports.partageOneArticle=async(req,res)=>{}



