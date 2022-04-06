// const db = require("../database/db");
// const UserProfile = db.userProfile;
// const Op = db.Sequelize.Op;

// //Create and Save a new UserProfile
// exports.create = (req, res) => {
//     // Validate request
//   if (!req.body) {
//     res.status(400).send({
//       message: "Content can not be empty!"
//     });
//     return;
//   }
//   // Create a Product
//   const userProfile = {
//     name: req.body.name,
//     age: req.body.age,
//     gender: req.body.gender,
//     birthday: req.body.birthday
//   };

//   UserProfile.create(userProfile)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the UserProfile."
//       });
//     });
// };

// // Find a single UserProfile with an id
// exports.findOne = (req, res) => {
//   const id = req.params.id;

//   Tutorial.findByPk(id)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error retrieving UserProfile with id=" + id
//       });
//     });
// };

// // Update a Tutorial by the id in the request
// exports.update = (req, res) => {
//   const id = req.params.id;

//   UserProfile.update(req.body, {
//     where: { id: id }
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "UserProfile was updated successfully."
//         });
//       } else {
//         res.send({
//           message: `Cannot update UserProfile with id=${id}. Maybe UserProfile was not found or req.body is empty!`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error updating UserProfile with id=" + id
//       });
//     });
// };

// // Delete a UserProfile with the specified id in the request
// exports.delete = (req, res) => {
//   const id = req.params.id;

//   UserProfile.destroy({
//     where: { id: id }
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "UserProfile was deleted successfully!"
//         });
//       } else {
//         res.send({
//           message: `Cannot delete UserProfile with id=${id}. Maybe UserProfile was not found!`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Could not delete UserProfile with id=" + id
//       });
//     });
// };

const Pool = require('pg').Pool

const pool = new Pool({
  user: 'me',
  host: 'ec2-34-233-157-9.compute-1.amazonaws.com',
  database: 'api',
  password: 'password',
  port: 5432,
})

