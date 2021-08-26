require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist,
} = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

const main = async () => {
    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB) {
        tareas.cargarTareasFromArray(tareasDB);
    }

    do {
        // Imprimir el menu
        opt = await inquirerMenu();
        switch(opt) {
            case '1':
                // Crear opcion
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc);
                break;
            case '2':
                // console.log(tareas._listado);
                // console.log(tareas.listadoArr);
                tareas.listadoCompleto();
                break;
            case '3': // Listar completadas
                tareas.listarPorStatus(true);
                break;
            case '4': // Listar pendientes
                tareas.listarPorStatus(false);
                break;
            case '5': // Completar tareas
                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if (id !== '0') {
                    const confirm = await confirmar('Are you sure?');
                    if (confirm) {
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada');
                    }
                }
                break;
        }
        guardarDB(tareas.listadoArr);
        await pausa();
    } while (opt !== '0');
};

main();