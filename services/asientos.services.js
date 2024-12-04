const AsientoRepository = require('../repositories/asientos.repositories');

class AsientoService{

    async obtenerAsientos(){
        return await AsientoRepository.obtenerAsientos();
    }

    async reservarAsientos(numero, reservadoPor){
        return await AsientoRepository.reservarAsiento(numero, reservadoPor);
    }

    async liberarAsientos(numero){
        return await AsientoRepository.liberarAsiento(numero);
    }

}

module.exports = new AsientoService();