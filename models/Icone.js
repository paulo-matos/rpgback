const mongoose = require('mongoose');

const schema = mongoose.Schema({
    nome:{
        type: String
    },
    url:{
        type: String
    }
});

module.exports = mongoose.model('Icone', schema, 'icones');