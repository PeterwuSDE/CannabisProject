const getUserProfiles = "SELECT * FROM userProfiles";
const getUserProfileById = "SELECT * FROM userProfiles WHERE userProfileid = $1"; //$1 is a parameter
const checkNameExists = "SELECT p FROM userProfiles p WHERE P.name = $1";
const addUserProfile = "INSERT INTO userProfiles (name, age, gender, birthday) VALUES ($1, $2, $3, $4)";
const deleteUserProfile = "DELETE FROM userProfiles WHERE userProfileid = $1";
const updateUserProfile = "UPDATE userProfiles SET name = $1 WHERE userProfileid = $2";

module.exports = {
    getUserProfiles,
    getUserProfileById,
    checkNameExists, 
    addUserProfile,
    deleteUserProfile,
    updateUserProfile
};