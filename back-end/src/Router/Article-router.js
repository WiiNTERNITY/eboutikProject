const router=require('express').Router();
const articleController=require("../Controllers/Article-controller");

// get all article router
router.get("/",articleController.getAllArticle);
// get one article router
router.get("/:id",articleController.getOneArticle);

// add one article router
router.post("/addOneArticle",articleController.addOneArticle);
// delete one article router
router.delete("/deleteOneArticle",articleController.deleteOneArticle);
// update one article router
router.put("/updateOneArticle",articleController.updateOneArticle);
// like one article router
router.put("/likeOneArticle",articleController.likeOneArticle);
// unlike one article router
router.put("/unlikeOneArticle",articleController.unlikeOneArticle);
// add comments of one article router
router.post("/addCommentsOneArticle",articleController.addCommentsOneArticle);
// delete comments of one article router
router.delete("/deleteCommentsOneArticle",articleController.deleteCommentsOneArticle);
// update comments of one article router
router.put("/updateCommentsOneArticle",articleController.updateCommentsOneArticle);
// partage of one article router
router.post("/partageOneArticle",articleController.partageOneArticle);


module.exports=router;