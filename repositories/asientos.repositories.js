const db = require('../config/db');

class AsientoRepository{

    async obtenerAsientos(){
        try{
            const [asientos] = await db.query('SELECT * FROM asientos');
            return asientos;
        }catch(err){
            return err;
        }
    }

    async reservarAsiento(numero, reservadoPor){
        try{
            const [asiento_reservado] = await db.query('UPDATE asientos SET Disponible = 0, reservadoPor = ? WHERE Numero = ?', [reservadoPor,numero]);
            return {mensaje: `Asiento Reservado por ${reservadoPor}.`};
        }catch(err){
            return err;
        }   
    }

    async liberarAsiento(numero){
        try{
            const [asiento_liberado] = await db.query('UPDATE asientos SET Disponible = 1, reservadoPor = NULL WHERE Numero = ?', [numero]);
            return {mensaje: 'Asiento Disponible'};
        }catch(err){
            return err;
        }
    }

}

module.exports = new AsientoRepository();