const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'limit',
                    type: 'number',
                    default: 10,
                    describe: 'Es el limite hasta donde se multiplicará la base'
                })
                .option('p', {
                    alias: 'print',
                    type: 'boolean',
                    default: false,
                    describe: 'Imprime en pantalla la tabla'
                })
                .check((argv, options) => {
                    if (isNaN(argv.b) || isNaN(argv.l)) {
                        throw 'La base tiene que ser un numero';
                    }
                    return true;
                })
                .argv;

module.exports = argv