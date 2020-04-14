const axios = require('axios');

const getClima = async (lat, long) => {


    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=32f843d833c38373032f825c4a92418a&units=metric`);
    if (!resp.data) {
        throw new Error(`No hay resultados para ${lat} ${long}`);
    }
    return resp.data.main.temp;
}

module.exports = {
    getClima
};