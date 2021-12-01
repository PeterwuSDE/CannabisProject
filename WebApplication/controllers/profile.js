const Profile = require("../models/profile.js");
exports.create = (req, res) => {
    // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Product
  const profile = new Profile({
    Type: req.body.Type,
    StrainName: req.body.StrainName,
    ProductName: req.body.ProductName,
    THC: req.body.THC || 0,
    CBD: req.body.CBD || 0,
    PurchaseDate: req.body.PurchaseDate
  });

  // Save Customer in the database
  Profile.create(profile, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Profile."
      });
    else res.send(data);
  });
};