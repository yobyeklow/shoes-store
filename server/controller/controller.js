var Itemdb = require('../model/model');
const multer = require("multer")


exports.create = (req,res)=>{
    if (!req.body){
        res.status(400).send({message:"Du lieu bi bo trong"});
        return;
    }
    if (req.fileValidationError) {
        return res.send(req.fileValidationError);
    }
    else if (!req.file) {
        return res.send('Please select an image to upload');
    }
    const item = new Itemdb({
        name:req.body.name,
        price:req.body.price,
        image:req.file.filename,
    })
    item
        .save(item)
        .then((data)=>{
            res.send(data);
        })
        .catch((err)=>{
            res.status(500).send({message:err.message || "Da xay ra loi trong qua trinh khoi tao san pham"});
        })
}
exports.find =  (req,res) =>{
    if(req.query.id){
        var id = req.query.id;
        Itemdb.findOne(id)
            .then((data)=>{
                res.send(data)
            })
            .catch((err)=>{
                res.status(505).send({message:err.message}||"Da xay ra loi trong qua trinh tìm kiếm")
            })
    }
    else{
        Itemdb.find()
            .then((data)=>{
                res.send(data);
            })
            .catch((err)=>{
                res.status(505).send({message:err.message}||"Da xay ra loi trong qua trinh tim kiem")
            })
    }
}
