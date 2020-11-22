alert("hola")
let ahorro;
let sueldo;
let total;

sueldo = Number.parseFloat(prompt('Ingrese el valor del sueldo'));
let ahorroanual = Ahorro(sueldo);

function Ahorro(sueldo){
    ahorro = (sueldo * 0.15)* 4;
    total = ahorro*12;
    return total;
}
document.write('El ahorro Anual es:' + ahorroanual);