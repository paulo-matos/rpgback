const mongoose = require('mongoose');

const schema = mongoose.Schema({
    identificador:{
        type: String
    },
    qualidades:{
        type: String
    },
    defeitos:{
        type: String
    },
    trilha:{
        type: String
    },
    trilha_pts:{
        type: Number
    },
    forca_vontade_nivel:{
        type: Number
    },
    forca_vontade_atual:{
        type: Number
    },
    pontos_sangue_total:{
        type: Number
    },
    pontos_sangue_atual:{
        type: Number
    },
    pontos_vida_total:{
        type: Number
    },
    pontos_vida_atual:{
        type: Number
    },
    fraqueza:{
        type: String
    },
    pontos_experiencia:{
        type: Number,
        default: 0
    }    
});

module.exports = mongoose.model('Detalhe', schema, 'detalhes');