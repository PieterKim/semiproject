const express = require("express");
const router = express.Router();
const API = require('../controllers/api');
const multer = require('multer');
const post = require('../models/post')


let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./uploads");
    },
    filename : function (req, file, cb) {
        cb(null, file.fieldname+"_"+Date.now()+"_"+file.originalname);
    }
})
let upload = multer({
    storage: storage,
}).single("image");


router.get('/', API.fetchAllPost);
router.get('/:id', API.fetchPostById);
router.post('/', upload, API.createPost);
router.patch('/:id', upload, API.updatePost);
router.delete('/:id',(req, res, next) => {
    res.send(`${req.params.id} Router 연결 완료`)
});


router.get("/", (req,res) => {
    res.send("Hello World");
});





module.exports = router;