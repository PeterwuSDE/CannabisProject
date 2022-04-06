const sql = require("../database/db.js");
const Profile = function(profile) {
    this.maintype = profile.maintype;
    this.subtype = profile.subtype;
    this.strainname = profile.strainname;
    this.cbd = profile.cbd;
    this.thc = profile.thc;
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