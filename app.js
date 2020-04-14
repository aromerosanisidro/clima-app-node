const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        descripcion: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// lugar.getLugarLatLng(argv.direccion).then(result => console.log(result)).catch(err =>console.error(err));
//clima.getClima(42.8, -8.5).then(result => console.log(result)).catch(err =>console.error(err));


const getInfo = async (descripcion) => {
    let coordenadas;
    try {
        coordenadas = await lugar.getLugarLatLng(descripcion);
    } catch (err) {
        console.error(err);
        return `No se pudo obtener las coordenadas de ${descripcion}`;
    }

    let temp;
    try {
        temp = await clima.getClima(coordenadas.lat, coordenadas.lng);
        return `El clima de ${coordenadas.direccion} es ${temp}`;
    } catch (err) {
        console.error(err);
        return `No se pudo obtener el clima de ${coordenadas.direccion}`;
    }
}

getInfo(argv.direccion).then( s => console.log(s)).catch(e => console.error(e));