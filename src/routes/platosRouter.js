const platosController = require('./../controllers/platosController')

const express = require('express');
const router = express.Router();

router.get('/',platosController.index)

router.get('/detalle/:id',platosController.detail)


module.exports = router;