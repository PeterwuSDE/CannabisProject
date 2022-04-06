// const sql = require("../database/db.js");
// const UserProfile = function(userProfile) {
//     this.name = userProfile.name;
//     this.age = userProfile.age;
//     this.gender = userProfile.gender;
//     this.birthday = userProfile.birthday;
// };

// UserProfile.create = (newUserProfile, result) => {
//     sql.query("INSERT INTO Profile SET ?", newUserProfile, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//             return;
//         }
//         console.log("created session: ", {id: res.insertId, ...newUserProfile});
//         result(null, {id: res.insertId, ...newUserProfile});
//     });
// }

// module.exports = UserProfile;

module.exports = (sequelize, Sequelize) => {
    const UserProfile = sequelize.define("tutorial", {
      name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.STRING
      }
    });
    
  return UserProfile;
};
  