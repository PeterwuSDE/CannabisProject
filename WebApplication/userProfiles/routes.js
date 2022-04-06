const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get("/", controller.getUserProfiles); //read (all)
router.post("/", controller.addUserProfile);  //create
router.get("/:userProfileid", controller.getUserProfileById); //read (specific)
router.put("/:userProfileid", controller.updateUserProfile);  //update
router.delete("/:userProfileid", controller.deleteUserProfile); //delete

module.exports = router;