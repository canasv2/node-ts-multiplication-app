//const fs = require('fs');
/*
import fs from 'fs';
const mensaje = '====================';

let guardar = '';
console.log(mensaje);
guardar = guardar + mensaje + '\n'
console.log('   Tabla del 5');
guardar = guardar + '   Tabla del 5' + '\n'
console.log(mensaje);
guardar = guardar + mensaje + '\n'
guardar = guardar 

for (let i = 1; i < 11; i++) {
    console.log('5 x ' + i + ' = ' + 5*i);
    guardar = guardar + ('5 x ' + i + ' = ' + 5*i) + '\n';
  }

  fs.writeFile('outputs/tabla5.txt', guardar, (err:any) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('Data has been written to output.txt');
    }
});

*/
import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';
console.log( yarg );

//const { b:base, l:limit, show} = yarg //Esto funcionaria para desetructurar el argumento

let outputMessage = '';
const base = yarg.b;
const headerMessage = `
================================
        Tabla del ${ base }
================================\n
`;

for ( let i = 1; i <= yarg.l; i++){
    outputMessage += `${ base } x ${ i } = ${ base * i } \n`;
}

outputMessage = headerMessage + outputMessage;
if( yarg.s == true){
    console.log(outputMessage);
}

const outputPath = `outputs`

fs.mkdirSync(outputPath, { recursive:true });
fs.writeFileSync(`${outputPath}/tabla-${ base }.txt`, outputMessage);
console.log('File created');

