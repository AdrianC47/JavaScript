/**
 * Días de la semana  abrimos a las 11
 * pero los fines de semana abrimos a las 9
 */

//Entra a un sitio web, para consultar si está abierto hoy...

const dia = 1; // 0:domingo, 1:Lunes.....
const horaActual = 10; 

let horaApertura;
let mensaje; //Está abierto, Está cerrado, hoy abrimos a las XX

// if (dia === 0  || dia === 6){
//     if ( [0,6].includes(dia) ) { //con el includes pregunto si dia esta dentro de mi arreglo que tiene los valores de 0 y 6 y regresa un booleano     
//     console.log('Fin de semana');
//     horaApertura=9;
// } else {
//     console.log('Dia de la semana');
//     horaApertura=11;
// }

horaApertura = ([0,6].includes(dia)) ? 9 : 11; //con el includes pregunto si dia esta dentro de mi arreglo que tiene los valores de 0 y 6 y regresa un booleano   

// if (horaActual >= horaApertura){
//     mensaje = 'Está abierto';
// } else {
//     mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;
// }

mensaje = (horaActual>= horaApertura) ? 'Está abierto': `Está cerrado, hoy abrimos a las ${horaApertura}`;
console.log({horaApertura, mensaje});

