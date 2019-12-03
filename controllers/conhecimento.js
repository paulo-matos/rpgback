const Conhecimento = require('../models/Conhecimento');

const controller = {};

controller.novo = async function (req, res) {
    try {
        await Conhecimento.create(req.body);
        // HTTP 201: Created - conseguiu criar nova entrada
        res.status(201).send('');
    } catch (erro) {
        console.error(erro);
        //HTTP 500: Internal Server Error
        res.sendStatus(500).end();
    }
}

controller.listar = async function (req, res) {
    try {
        const conhecimentos = await Conhecimento.find();
        res.send(conhecimentos);
    } catch (erro) {
        console.error(erro);
        res.sendStatus(500).end(); //500 é erro interno do servidor
    }
}

controller.obterUm = async function (req, res) {
    const id = req.params.id;
    try {
        const conhecimento = await Conhecimento.findById(id);
        if (conhecimento) { //conhecimento encontrada = variável preenchida
            res.send(conhecimento);
        } else { //conhecimento não encontrado = variável vazia
            res.sendStatus(404).end();
            //se a quantidade de posições for diferente ou tiver algum valor fora de hexadecimal ele retorna erro 500
        }
    } catch (erro) {
        console.error(erro);
        res.sendStatus(500).end();
    }
}

controller.atualizar = async function (req, res) {
    const id = req.body._id; //nome do campo vem com _ quando vem no body (corpo da requisição)
    try {
        const conhecimento = await Conhecimento.findByIdAndUpdate(id, req.body);
        //coloca na variável pra saber se houve alteração, caso não encontre então a variável fica vazia
        if (conhecimento) {
            //http 204: no content, pois não há dados enviados APÓS A ALTERAÇÃO
            res.sendStatus(204).send();
        } else {
            res.sendStatus(404).end();
        }
    } catch (erro) {
        console.error(erro);
        res.sendStatus(500).end();
    }
}

controller.excluir = async function (req, res){
    const id = req.body._id; //pegando id da requisição q está no body
    try{
        const conhecimento = await Conhecimento.findByIdAndDelete(id);
        if (conhecimento){
            res.sendStatus(204).end(); //204 = no content, não há mais dados APÓS A EXCLUSÃO
        }else{
            res.sendStatus(404).end();
        }
    }catch(erro){
        console.error(erro);
        res.sendStatus(500).end();
    }
}

module.exports = controller;


/*
 * 200 Sucesso
 * 300 Redirecionamento
 * 400 Erro de Rota
 * 500 Erro de Conexão - Internal Server Error	
 * 
 * https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
 */
