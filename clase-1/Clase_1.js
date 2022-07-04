// Actividad - Calcular edad de usuario.

// Preguntar datos al usuario

let anioActual = prompt('Ingrese el año en el que vive:', 2022);
let anioDeNacimiento = prompt('Ingrese el año de su nacimiento:');

// Función para hallar edad de usuario

function calcularEdad(anioActual, anioDeNacimiento) {
  return anioActual - anioDeNacimiento;
}

console.log(calcularEdad(anioActual, anioDeNacimiento));

// Actividad - Calcular salario anual, mensual, semanal, por dia y hora

// Preguntar datos al usuario

let sueldoAnual = Number(prompt('Ingrese su sueldo anual en pesos:'));
let diasALaSemana = Number(prompt('Ingrese cuantos dias a la semana trabaja:'));
let horasAlDia = Number(prompt('Ingrese cuantas horas al dia trabaja: '));

// Funcion para calcular sueldo mensual

function calcularSueldoMensual(sueldoAnual) {
  const MESES_DEL_ANIO = 12;
  return sueldoAnual / MESES_DEL_ANIO;
}

// Funcion para calcular sueldo semanal

function calcularSueldoSemanal(sueldoAnual) {
  const SEMANAS_DEL_ANIO = 52;
  return sueldoAnual / SEMANAS_DEL_ANIO;
}

// Funcion para calcular sueldo por dia

function calcularSueldoDiario(sueldoAnual, diasALaSemana) {
  return calcularSueldoSemanal(sueldoAnual) / diasALaSemana;
}

// Funcion para calcular sueldo por hora

function calcularSueldoPorHora(sueldoAnual, horasAlDia) {
  return calcularSueldoDiario(sueldoAnual) / horasAlDia;
}

// Funcion para mandar mensaje al usuario

function mandarMensaje(sueldoAnual) {
  console.log(
    'Tu sueldo mensual es: $' +
      calcularSueldoMensual(sueldoAnual) +
      ', semanal: $' +
      calcularSueldoSemanal(sueldoAnual) +
      ', diario: $' +
      calcularSueldoDiario(sueldoAnual) +
      ', por hora: $' +
      calcularSueldoPorHora(sueldoAnual)
  );
}

// Mandar mensaje

mandarMensaje(sueldoAnual);
