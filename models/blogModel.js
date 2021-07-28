const mongoose = require("mongoose");

const Blog = new mongoose.Schema({
    heading: {
        type: String,
        required: true,
    },
    blog: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
});

module.exports = mongoose.model("blog", Blog, "blog");
