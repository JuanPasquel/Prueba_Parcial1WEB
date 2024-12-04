
const AsientoController = require('../controllers/asientos.controllers');
const express = require('express');
const router = express.Router();

router.get('/', AsientoController.obtenerAsientos);
router.post('/reservar', AsientoController.reservarAsientos);
router.post('/liberar', AsientoController.liberarAsientos);

module.exports = router;