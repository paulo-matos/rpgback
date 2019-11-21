const mongoose = require('mongoose'); //assim o node sabe que tem que procurar o pacote na pasta node_modules
//variavel const é atribuida apenas uma vez e seu valor nao muda
var dotenv = require('dotenv').config();

//URI = Universal Resource Identifier
module.exports = function(uri){
    mongoose.connect(uri,{ useNewUrlParser: true});

    mongoose.set('useFindAndModify', false);

    mongoose.connection.on('connected', function(){
        console.log('* Mongoose! conectado');
    });

    mongoose.connection.on('disconnected', function(){
        console.log('* Mongoose! desconectado');
    });

    mongoose.connection.on('error', function(error){
        console.log('* Mongoose! ERRO: ' + error);
    });

    //capturamos um sinal de encerramento (SIGINT), ctrl+c
    process.on('SIGINT',function(){
        mongoose.connection.close(function(){
            console.log('* Mongoose! Desconectado pelo término da aplicação');
            // 0 indica que a finalização ocorreu sem erros
            process.exit(0);
        });
    });
}