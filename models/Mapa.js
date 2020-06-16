const mongoose = require('mongoose');

const schema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    subtitulo: {
        type: String,
        default: ''
    },
    descricao: {
        type: String,
        required: true
    },
    //longitute
    coordenadaY: {
        type: Number,
        required: true
    },
    //latitude
    coordenadaX: {
        type: Number,
        required: true
    },
    idUsuario: {
        type: mongoose.ObjectId,
        ref: 'Usuario',
        required: true,
        default: '5ee85a7d8a6ed8196c1e0eff'
    },
    idIcone: {
        type: mongoose.ObjectId,
        ref: 'Icone',
        required: true,
        default: '5ee85f788519291b3c26264f'
    }
});

module.exports = mongoose.model('Mapa', schema, 'mapas');