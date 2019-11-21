const express = require('express'); //express fornece o roteador que é necessário
const router = express.Router();
const controller = require('../controllers/pericia');

router.post('/',controller.novo);
router.get('/',controller.listar);
router.get('/:id',controller.obterUm); //url não pode ser igual pra dois verbos http
router.put('/',controller.atualizar);
router.delete('/',controller.excluir);

module.exports = router;

/*

Operação        Verbo HTTP      Método Controller
CREATE          POST            criar
RETRIEVE        GET             listar / obterUm
UPDATE          PUT             atualizar
DELETE          DELETE          excluir

*/