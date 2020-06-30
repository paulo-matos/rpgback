const mongoose = require('mongoose');

const schema = mongoose.Schema({
    url:{
        type: String
    },
    idUsuario: {
        type: mongoose.ObjectId,
        ref: 'Usuario',
        required: true,
        default: '5ee85a7d8a6ed8196c1e0eff'
    },
    titulo:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Livro', schema, 'livros');