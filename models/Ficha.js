const mongoose = require('mongoose');

const schema = mongoose.Schema({
    idUsuario: {
        type: mongoose.ObjectId,
        ref: 'Usuario',
        required: true,
        default: '5ee85a7d8a6ed8196c1e0eff'
    },
    imagem:{
        type: String
    },
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
    soc_carisma: {
        type: Number,
        default: 1
    },
    soc_manipulacao: {
        type: Number,
        default: 1
    },
    soc_aparencia: {
        type: Number,
        default: 1
    },
    men_percepcao: {
        type: Number,
        default: 1
    },
    men_inteligencia: {
        type: Number,
        default: 1
    },
    men_raciocinio: {
        type: Number,
        default: 1
    },
    prontidao: {
        type: Number,
        default: 0
    },
    esportes: {
        type: Number,
        default: 0
    },
    briga: {
        type: Number,
        default: 0
    },
    esquiva: {
        type: Number,
        default: 0
    },
    empatia: {
        type: Number,
        default: 0
    },
    expressao: {
        type: Number,
        default: 0
    },
    intimidacao: {
        type: Number,
        default: 0
    },
    lideranca: {
        type: Number,
        default: 0
    },
    manha: {
        type: Number,
        default: 0
    },
    labia: {
        type: Number,
        default: 0
    },
    empatia_animais: {
        type: Number,
        default: 0
    },
    oficios: {
        type: Number,
        default: 0
    },
    conducao: {
        type: Number,
        default: 0
    },
    etiqueta: {
        type: Number,
        default: 0
    },
    arma_fogo: {
        type: Number,
        default: 0
    },
    arma_branca: {
        type: Number,
        default: 0
    },
    performance: {
        type: Number,
        default: 0
    },
    seguranca: {
        type: Number,
        default: 0
    },
    furtividade: {
        type: Number,
        default: 0
    },
    sobrevivencia: {
        type: Number,
        default: 0
    },
    academicos: {
        type: Number,
        default: 0
    },
    computador: {
        type: Number,
        default: 0
    },
    financas: {
        type: Number,
        default: 0
    },
    investigacao: {
        type: Number,
        default: 0
    },
    direito: {
        type: Number,
        default: 0
    },
    linguistica: {
        type: Number,
        default: 0
    },
    medicina: {
        type: Number,
        default: 0
    },
    ocultismo: {
        type: Number,
        default: 0
    },
    politica: {
        type: Number,
        default: 0
    },
    ciencias: {
        type: Number,
        default: 0
    },
    antecedente01:{
        type: String
    },
    nivel_antecedente01:{
        type: Number
    },
    antecedente02:{
        type: String
    },
    nivel_antecedente02:{
        type: Number
    },
    antecedente03:{
        type: String
    },
    nivel_antecedente03:{
        type: Number
    },
    antecedente04:{
        type: String
    },
    nivel_antecedente04:{
        type: Number
    },
    antecedente05:{
        type: String
    },
    nivel_antecedente05:{
        type: Number
    },
    disciplina01:{
        type: String
    },
    nivel_disciplina01:{
        type: Number
    },
    disciplina02:{
        type: String
    },
    nivel_disciplina02:{
        type: Number
    },
    disciplina03:{
        type: String
    },
    nivel_disciplina03:{
        type: Number
    },
    disciplina04:{
        type: String
    },
    nivel_disciplina04:{
        type: Number
    },
    disciplina05:{
        type: String
    },
    nivel_disciplina05:{
        type: Number
    },
    consciencia_conviccao: {
        type: Number,
        default: 0
    },
    autocontrole_instinto: {
        type: Number,
        default: 0
    },
    coragem: {
        type: Number,
        default: 0
    },
    qualidades:{
        type: String
    },
    fraqueza:{
        type: String
    },
    trilha:{
        type: String
    },
    trilha_pts:{
        type: Number,
        default: 0
    },
    forca_vontade_nivel:{
        type: Number,
        default: 0
    },
    forca_vontade_atual:{
        type: Number,
        default: 0
    },
    pontos_sangue_total:{
        type: Number,
        default: 0
    },
    pontos_sangue_atual:{
        type: Number,
        default: 0
    },
    vitalidade:{
        type: Number,
        default: 0
    },
    pontos_experiencia:{
        type: Number,
        default: 0
    }

    // detalhe: {
    //     type: mongoose.ObjectId,
    //     ref: 'Detalhe'
    // }
});

module.exports = mongoose.model('Ficha', schema, 'fichas');