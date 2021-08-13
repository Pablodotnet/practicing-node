const fs = require('fs');

const escribirArchivo = (nombreArchivo, contenido) => {
    fs.writeFile(nombreArchivo, contenido, error => {
        if (error) throw error;
    });
};

module.exports = { escribirArchivo };