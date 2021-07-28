const mongoose = require("mongoose");
const Admin = require("../models/adminModel");

exports.signup = (req, res) => {
    let { firstName, lastName, email, password } = req.body;
    let admin = new Admin({ firstName, lastName, email, password });
    admin
        .save()
        .then(() => {
            console.info(
                `Admin created with name ${admin.firstName} ${admin.lastName}`
            );
            return res.status(200).send(`Admin created`);
        })
        .catch((error) => {
            console.error("Error creating admin");
            return res.status(500).send("Error creating admin");
        });
};

exports.login = (req, res) => {
    let { email, password } = req.body;
    Admin.findOne({ email: email, password: password })
        .then((admin) => {
            if (admin) {
                console.info("Admin logged in");
                return res.status(200).send("Admin logged in");
            }
            console.error("Admin not found");
            return res.status(404).send("Admin not found");
        })
        .catch((error) => {
            console.error(error);
            return res.status(500).send(error);
        });
};
