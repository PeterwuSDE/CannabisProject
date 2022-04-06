module.exports = app => {
    const userProfile = require("../controllers/userProfile.js");
  
    var router = require("express").Router();
  
    // Create a new UserProfile
    router.post("/", userProfile.create);
  
    // Retrieve a single UserProfile with id
    router.get("/:id", userProfile.findOne);
  
    // Update a UserProfile with id
    router.put("/:id", userProfile.update);
  
    // Delete a UserProfile with id
    router.delete("/:id", userProfile.delete);
  
    app.use("/api/userProfile", router);
  };
  