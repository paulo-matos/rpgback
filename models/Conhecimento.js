const mongoose = require('mongoose');

const schema = mongoose.Schema({
    academicos:{
        type: Number
    },
    computador:{
        type: Number
    },
    financas:{
        type: Number
    },
    investigacao:{
        type: Number
    },
    direito:{
        type: Number
    },
    linguistica:{
        type: Number
    },
    medicina:{
        type: Number
    },
    ocultismo:{
        type: Number
    },
    politica:{
        type: Number
    },
    ciencias:{
        type: Number
    }
});

module.exports = mongoose.model('Conhecimento', schema, 'conhecimentos');