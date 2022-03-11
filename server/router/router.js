const express = require('express');
const route = express.Router();
const services = require("../services/services");
const controller = require("../controller/controller");
const multer = require("multer");
const path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const imageFilter = function(req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
       req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};  
const upload = multer({storage:storage,fileFilter:imageFilter});
route.get('/',services.homeRoute);

route.post("/api/items",upload.single('image'),controller.create);
route.get("/api/items",controller.find);
module.exports = route;