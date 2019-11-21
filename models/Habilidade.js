const mongoose = require('mongoose');

const schema = mongoose.Schema({
    talentos:{
        type: mongoose.ObjectId,
        ref: 'Talento'
    },
    pericias:{
        type: mongoose.ObjectId,
        ref: 'Pericia'
    },
    conhecimentos:{
        type: mongoose.ObjectId,
        ref: 'Conhecimento'
    }
});

module.exports = mongoose.model('Habilidade', schema, 'habilidades');