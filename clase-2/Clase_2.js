//Actividad de clase 2

// Funcion suma

function sumar(numero1, numero2) {
  return numero1 + numero2;
}

// Funcion resta

function restar(numero1, numero2) {
  return numero1 - numero2;
}

// Definir variables

let operador = prompt('Ingrese un operador de + o -');
let numero1 = Number(prompt('Ingrese un numero'));
let numero2 = Number(prompt('Ingrese otro numero'));

// Ver si operador es + o -, y guardar resultado en variable para despues mostrar

if (operador === '+') {
  resultado = sumar(numero1, numero2);
} else {
  resultado = restar(numero1, numero2);
}

// Mostrar resultado

console.log(
  `El resultado de ${numero1} ${operador} ${numero2} es: ${resultado}`
);
