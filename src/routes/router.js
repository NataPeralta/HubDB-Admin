const controller = require('../controllers/controllers.js')

const express = require('express');
const router = express.Router();

router.get('/', controller.getTables)

router.get('/tabla/:id', controller.getTable)


module.exports = router;