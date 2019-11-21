const mongoose = require('mongoose');

const schema = mongoose.Schema({
    fis_forca: {
        type: Number,
        default: 1
    },
    fis_destreza: {
        type: Number,
        default: 1
    },
    fis_vigor: {
        type: Number,
        default: 1
    },
    soc_carisma:{
        type: Number,
        default: 1
    },
    soc_manipulacao:{
        type: Number,
        default: 1
    },
    soc_aparencia:{
        type: Number,
        default: 1
    },
    men_percepcao:{
        type: Number,
        default: 1
    },
    men_inteligencia:{
        type: Number,
        default: 1
    },
    men_raciocinio:{
        type: Number,
        default: 1
    }    
});

module.exports = mongoose.model('Atributo', schema, 'atributos');