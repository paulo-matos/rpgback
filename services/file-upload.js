const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');


require('dotenv').config();

const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS,
    region: 'sa-east-1'
});

const fileFilter = (req,file,cb) =>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true)
    }else{
        cb(new Error('Formato de imagem inválido. Somente JPG ou PNG são aceitos'), false);
    }
}

const upload = multer({
    fileFilter,
    storage: multerS3({
        s3,
        bucket: 'escudodomestre-images',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString() + file.originalname)
        }
    })
});

module.exports = upload;