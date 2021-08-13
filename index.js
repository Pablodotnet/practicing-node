const { calcularTabla } = require('./helpers/calcularTabla');
const argv = require('./config/yargs');
console.clear();

const { base, limit, print } = argv;
calcularTabla(base, limit, print).then(
    response => console.log(`Archivo ${response} creado satisfactoriamente`),
    error => console.error('error: ', error),
)

