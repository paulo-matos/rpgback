const mongoose = require('mongoose');

const schema = mongoose.Schema({
    email:{
        type: String
    },
    senha: {
        type: String
    },
    ativo:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Usuario', schema, 'usuarios');