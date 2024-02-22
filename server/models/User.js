const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
    {email : String,
    nick : String,
    password : String,
    profileImg : String,
    create: {
        type : Date,
        default: Date.now,
    }}
);

module.exports = mongoose.model("User", postSchema)