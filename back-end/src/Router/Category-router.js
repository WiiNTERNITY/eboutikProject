const router=require('express').Router();
const categoryController=require("../Controllers/Category-controller");

// get one category
router.get("/",categoryController.getAllCategory);

// get one category
router.get("/:id",categoryController.getOneCategory);

// get one category
router.post("/AddOneCategory",categoryController.AddOneCategory);

// get one category
router.put("/updateOneCategory",categoryController.updateOneCategory);

// get one category
router.delete("/deleteOneCategory",categoryController.deleteOneCategory);

// get one category
router.delete("/delteAllCategory",categoryController.delteAllCategory);

// export
module.exports=router;