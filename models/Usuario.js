const mongoose = require('mongoose');

const schema = mongoose.Schema({
    email:{
        type: String
    },
    senha: {
        type: String
    }
});

module.exports = mongoose.model('Usuario', schema, 'usuarios');