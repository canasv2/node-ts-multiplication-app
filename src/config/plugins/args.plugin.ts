//const yargs = require('yargs/yargs')
//const { hideBin } = require('yargs/helpers')
import yargs, { options } from 'yargs';
import { hideBin } from 'yargs/helpers';

                            //el hideBin funciona para no mostrar la ruta, sino solo los argumentos, es una medida de seguridad
export const yarg = yargs( hideBin(process.argv) )  //el proces es argumento interno para llegar a los args
    .option('b',{
        alias: 'base',
        type:'number',
        demandOption: true,
        describe: 'base tabla multiplicacion'
    })
    .option('l',{
        alias:'limit',
        type: 'number',
        default: 10,
        describe: 'limite tabla multiplicar'
    })
    .option('s',{
        alias:'show',
        type: 'boolean',
        default: false,
        describe: 'mostrar tabla de multiplicar'
    })
    .option('n',{
        alias: 'name',
        type: 'string',
        default: 'tabla multiplicar ',
        describe: 'Nombre del archivo'
    })
    .option('d',{
        alias:'destination',
        type: 'string',
        default: 'outputs',
        describe: 'ubicacion del archivo'
    })
    .check( ( argv, options ) => {
        //throw 'Error: base debe de ser un numero';
        //return true
        if ( argv.b < 1 ) throw 'Error: Base debe ser mayor a cero';
        
        return true
    })
    .parseSync()




