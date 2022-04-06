const pool = require('../configs/config');
const queries = require('./queries');

const getUserProfiles = (req, res) => {
    pool.query(queries.getUserProfiles, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getUserProfileById = (req, res) => {
    const userProfileid = parseInt(req.params.userProfileid);
    pool.query(queries.getUserProfileById, [userProfileid], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addUserProfile = (req, res) => {
    const { name, age, gender, birthday } = req.body;
    ///if need to check for redundant user
    pool.query(queries.checkNameExists, [name], (error, results) => {
        if (results.rows.length) {
            res.send("Username already exists in database.");
        }
        //add product to db
        pool.query(queries.addUserProfile, [name, age, gender, birthday], (error, results) => {
            if (error) throw error;
            res.status(201).send("User added successfully!");
        });
    });
};

const deleteUserProfile = (req, res) => {
    const userProfileid = parseInt(req.params.userProfileid);

    pool.query(queries.getUserProfileById, [userProfileid], (error, results) => {
        const noUserProfileFound = !results.rows.length;
        if (noUserProfileFound) {
            res.send("User does not exist in the database.");
        }
        pool.query(queries.deleteUserProfile, [userProfileid], (error, results) => {
            if (error) throw error;
            res.status(200).send("User deleted successfully.");
        });
    });
};

//Currently only updates strain name. May (probably) need to make this update all values at once (only those passed as parameters by user).
const updateUserProfile = (req, res) => {
    const userProfileid = parseInt(req.params.userProfileid);
    const { name } = req.body;

    pool.query(queries.getUserProfileById, [userProfileid], (error, results) => {
        const noUserProfileFound = !results.rows.length;
        if (noUserProfileFound) {
            res.send("User does not exist in the database.");
        }
        pool.query(queries.updateUserProfile, [name, userProfileid], (error, results) => {
            if (error) throw error;
            res.status(200).send("User updated successsfully.");
        });
    });
};

module.exports = {
    getUserProfiles, 
    getUserProfileById,
    addUserProfile,
    deleteUserProfile,
    updateUserProfile,
};