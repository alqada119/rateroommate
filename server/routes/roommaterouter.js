const express = require("express");
const router = express.Router();
const roommatecontroller = require("../controllers/roommatecontroller");

//Get Routes
router.get("/",roommatecontroller.getRoomMates);
router.get("/:id",roommatecontroller.getRoommateById)

//Post Routes
router.post("/ratearoommate",roommatecontroller.rateARoommate);

//Update Routes


//Delete Routes

module.exports = router;