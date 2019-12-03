const mongoose = require('mongoose');

const schema = mongoose.Schema({
    identificador:{
        type: String
    },
    prontidao:{
        type: Number
    },
    esportes:{
        type: Number
    },
    briga:{
        type: Number
    },
    esquiva:{
        type: Number
    },
    empatia:{
        type: Number
    },
    expressao:{
        type: Number
    },
    intimidacao:{
        type: Number
    },
    lideranca:{
        type: Number
    },
    manha:{
        type: Number
    },
    labia:{
        type: Number
    }
});

module.exports = mongoose.model('Talento', schema, 'talentos');