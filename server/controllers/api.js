const Post = require("../models/post")
const fs = require("fs")


module.exports = class API {
    static async fetchAllPost(req, res){
        try {
            const post = await Post.find();
            res.status(200).json(post)
        } catch(err) {
            res.status(404).json({message: err.message})
        }
    }
    static async createPost(req, res){
        const post = req.body;
        const imagename = req.file.fieldname;
        post.image = imagename;
        try{
            await Post.create(post);
            res.status(201).json({message:"post success"})
        } catch (err) {
            res.status(404).json({message: err.message})
        }
    }
    static async fetchPostById(req, res) {
        const id = req.params.id;
        try{
            const posts = await Post.findById(id);
            // res.status(200).json(posts);
            res.json(posts);
        } catch(err) {
            res.status(404).json({message: err.message})
        }
    }
    static async updatePost(req, res){
        const id = req.params.id;
        let new_image = "";
        if (req.file) {
            new_image = req.file.fieldname;
            try {
                fs.unlinkSync("./uploads/" + req.body.old_image);
            } catch (err) {
                res.status(404).json({message: err.message})
            }
        } else {
            new_image = req.body.old_image;
        }
        const newPost = req.body;
        newPost.image = new_image;
        try {
            await Post.findByIdAndUpdate(id, newPost);
            res.status(200).json({message: "post 업데이트 완료"});
        } catch(err) {
            res.status(404).json({message: err.message})
        }
    }
}