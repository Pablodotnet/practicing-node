const { escribirArchivo } = require("./crearArchivo");
const colors = require('colors');

const calcularTabla = async (numeroTabla = 5, numeroFinal = 10, print = false) => {
    try {
        let salida = '';
        let salidaConsola = '';

        const fileName = `./output/tabla-${numeroTabla}.txt`;

        for (let i = 1; i <= numeroFinal; i++) {
            salida += `${numeroTabla} x ${i} = ${numeroTabla * i}\n`;
            salidaConsola += `${numeroTabla} ${'x'.yellow} ${i} ${'='.yellow} ${numeroTabla * i}\n`;
        }

        if (print) {
            console.log(colors.yellow('==================='));
            console.log(colors.rainbow(`Tabla del: ${numeroTabla}`));
            console.log(colors.yellow('==================='));
            console.log(salidaConsola);
        }

        escribirArchivo(fileName, salida);
        return fileName;
    } catch (error) {
        throw error;
    }
};

module.exports = { calcularTabla };