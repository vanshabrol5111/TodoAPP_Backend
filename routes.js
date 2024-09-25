const express = require("express");
const{gettodo,posttodo,patchtodo,puttodo,deletetodo}=require("./function/function")
const router=express.Router();
router.get("/details/",gettodo);
router.put("/changes/",puttodo);
router.patch("/change/",patchtodo);
router.post("/add",posttodo);
router.delete("/remove/",deletetodo);

module.exports=router