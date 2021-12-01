const sql = require("../database/db.js");
const Profile = function(profile) {
    this.Type = profile.Type;
    this.StrainName = profile.StrainName;
    this.ProductName = profile.ProductName;
    this.THC = profile.THC;
    this.CBD = profile.CBD;
    this.PurchaseDate = profile.PurchaseDate;
};

Profile.create = (newProfile, result) => {
    sql.query("INSERT INTO Profile SET ?", newProfile, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created session: ", {id: res.insertId, ...newProfile});
        result(null, {id: res.insertId, ...newProfile});
    });
}

module.exports = Profile;