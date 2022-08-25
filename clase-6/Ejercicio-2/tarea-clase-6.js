/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y
quitar) inputs+labels para completar el salario anual de cada 
integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento 
pre-existente el mayor salario anual, menor salario anual, 
salario anual promedio y salario mensual promedio.
Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo 
(no contarlos como 0).
*/

// Funcion para boton "Agregar 1 integrante"

const $botonAgregarIntegrante = document.querySelector(
    '#boton-agregar-integrante'
);

$botonAgregarIntegrante.onclick = function (
    inputCreadoIntegrante,
    labelCreadoIntegrante,
    brCreadoIntegrante
) {
    $labelIntegrantes = document.querySelector('#label-integrantes');

    labelCreadoIntegrante = document.createElement('label');
    $labelIntegrantes.appendChild(labelCreadoIntegrante);
    labelCreadoIntegrante.className = 'label-creado-integrante';

    brCreadoIntegrante = document.createElement('br');
    $labelIntegrantes.appendChild(brCreadoIntegrante);

    inputCreadoIntegrante = document.createElement('input');
    inputCreadoIntegrante.className = 'input-creado-integrante';
    inputCreadoIntegrante.type = 'number';

    arrayDeLabelCreados = [
        ...document.querySelectorAll('.label-creado-integrante'),
    ].map((element) => Number(element));
    for (i = 0; i <= arrayDeLabelCreados.length; i++) {
        labelCreadoIntegrante.textContent = `Ingresa el salario anual del integrante ${i}: `;
        labelCreadoIntegrante.appendChild(inputCreadoIntegrante);
    }
};
