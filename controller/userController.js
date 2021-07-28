const mongoose = require("mongoose");
const User = require("../models/userModel");
const Blog = require("../models/blogModel");

exports.signup = (req, res) => {
    let { firstName, lastName, email, password, dob } = req.body;
    let user = new User({ firstName, lastName, email, password, dob });
    user.save()
        .then(() => {
            console.info(
                `User created with name ${user.firstName} ${user.lastName}`
            );
            return res.status(200).send(`User created`);
        })
        .catch((error) => {
            console.error("Error creating user");
            return res.status(500).send("Error creating user");
        });
};

exports.login = (req, res) => {
    let { email, password } = req.body;
    User.findOne({ email: email, password: password })
        .then((user) => {
            if (user) {
                console.info("User logged in");
                return res.status(200).send("User logged in");
            }
            console.error("User not found");
            return res.status(404).send("User not found");
        })
        .catch((error) => {
            console.error(error);
            return res.status(500).send(error);
        });
};

exports.getUser = (req, res) => {
    let { id } = req.params;
    id = mongoose.Types.ObjectId(id);
    User.findOne({ _id: id })
        .then((user) => {
            if (user) {
                console.info(user);
                return res.status(200).send(user);
            }
            console.error("User not found");
            return res.status(404).send("User not found");
        })
        .catch((error) => {
            console.error(error);
            return res.status(500).send(error);
        });
};

exports.postBlog = (req, res) => {
    let { heading, blog, userId } = req.body;
    blog = new Blog({ heading, blog, userId });
    blog.save()
        .then(() => {
            console.info(`Blog Saved for user: ${userId}`);
            return res.status(200).send(`Blog Saved for user: ${userId}`);
        })
        .catch((error) => {
            console.error("Blog not saved");
            return res.status(500).send(error);
        });
};

exports.getBlog = (req, res) => {
    let { userId } = req.params;
    userId = mongoose.Types.ObjectId(userId);
    Blog.find({ userId })
        .then((blogs) => {
            if (blogs.length != 0) {
                console.info(blogs);
                return res.status(200).send(blogs);
            }
            console.error("Blog not found");
            return res.status(404).send("Blog not found");
        })
        .catch((error) => {
            console.error(error);
            return res.status(500).send(error);
        });
};
