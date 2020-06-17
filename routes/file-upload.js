const express = require('express');
const router = express.Router();

const upload = require('../services/file-upload');

const singleUpload = upload.single('image');

router.post('/image-upload', (req,res) => {
    singleUpload(req, res, function(err){

        if (err){
            return res.status(500).send({errors: [{title: 'Erro de upload!', detail: err.message}] });
        }
        return res.json({'imageUrl': req.file.location})
    });
})

router.get('/image-upload', (req, res, next) => {
    res.json({
        success: "Hello"
    });
})

module.exports = router;