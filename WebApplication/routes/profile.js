module.exports = app => {
    const profiles = require("../controllers/profile.js");
    app.post("/profiles", profiles.create);
}