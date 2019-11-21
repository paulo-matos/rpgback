const mongoose = require('mongoose');

const schema = mongoose.Schema({
    nome: {
        type: String,
        default: "Personagem"
    },
    jogador: {
        type: String,
        default: "Convidado"
    },
    especie: {
        type: String,
        default: "Vampiro"
    },
    cronica: {
        type: String
    },
    natureza: {
        type: String,
    },
    comportamento: {
        type: String
    },
    cla: {
        type: String,
        required: true
    },
    geracao: {
        type: Number,
        default: 13
    },
    senhor: {
        type: String,
    },
    conceito: {
        type: String,
    },
    atributo:{
        type: mongoose.ObjectId,
        ref: 'Atributo'
    },
    habilidade:{
        type: mongoose.ObjectId,
        ref: 'Habilidade'
    },
    detalhe:{
        type: mongoose.ObjectId,
        ref: 'Detalhe'
    }
});

module.exports = mongoose.model('Ficha', schema, 'fichas');