const mongoose = require('mongoose');

const schema = mongoose.Schema({
    empatia_animais:{
        type: Number
    },
    oficios:{
        type: Number
    },
    conducao:{
        type: Number
    },
    etiqueta:{
        type: Number
    },
    arma_fogo:{
        type: Number
    },
    arma_branca:{
        type: Number
    },
    performance:{
        type: Number
    },
    seguranca:{
        type: Number
    },
    furtividade:{
        type: Number
    },
    sobrevivencia:{
        type: Number
    }
});

module.exports = mongoose.model('Pericia', schema, 'pericias');