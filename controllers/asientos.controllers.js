const AsientoService = require('../services/asientos.services');

class AsientoController{

    async obtenerAsientos(req, res){
        res.status(201).json(await AsientoService.obtenerAsientos());
    }

    async reservarAsientos(req, res){
        res.json(await AsientoService.reservarAsientos(req.body.numero, req.body.reservadoPor));
    }

    async liberarAsientos(req, res){
        res.json(await AsientoService.liberarAsientos(req.body.numero));
    }

}

module.exports = new AsientoController();