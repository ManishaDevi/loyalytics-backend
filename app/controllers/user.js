const mongoose = require('mongoose');
const UserModel = require('./../../models/user');
const response = require('./../responses');

module.exports = {
    login: (req, res, next) => {
        let user = new UserModel();
        user.email = req.body.email;
        user.password = req.body.password;
        // save instance
        user.save(function (err) {
            if (!err) {
                response.ok(res)
            } else {
                response.error(res)
            }
        });
    }
}