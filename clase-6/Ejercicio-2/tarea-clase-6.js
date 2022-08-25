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

// Obtener número el promedio

function numeroPromedio(array) {
    let valorSuma = 0;
    for (let i = 0; i < array.length; i++) {
        valorSuma += array[i];
    }
    const promedio = valorSuma / array.length;
    return Math.trunc(promedio);
}

// Obtener el número más pequeño

function numeroMasChico(array) {
    let valorMenor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (valorMenor >= array[i]) {
            valorMenor = array[i];
        }
    }
    return valorMenor;
}

// Obtener el número más grande

function numeroMasGrande(array) {
    let valorMayor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (valorMayor <= array[i]) {
            valorMayor = array[i];
        }
    }
    return valorMayor;
}

// Funcion para cuando se hace click en el boton "Agregar 1 integrante"

const $botonAgregarIntegrante = document.querySelector(
    '#boton-agregar-integrante'
);

$botonAgregarIntegrante.onclick = function (
    inputCreadoIntegrante,
    labelCreadoIntegrante,
    brCreadoIntegrante
) {
    labelCreadoIntegrante = document.createElement('label');
    labelCreadoIntegrante.className = 'label-creado-integrante';

    $labelIntegrantes = document.querySelector('#label-integrantes');
    $labelIntegrantes.appendChild(labelCreadoIntegrante);

    brCreadoIntegrante = document.createElement('br');

    inputCreadoIntegrante = document.createElement('input');
    inputCreadoIntegrante.className = 'input-creado-integrante';
    inputCreadoIntegrante.type = 'number';

    arrayDeLabelCreados = [
        ...document.querySelectorAll('.label-creado-integrante'),
    ].map((element) => element);
    for (i = 0; i <= arrayDeLabelCreados.length; i++) {
        labelCreadoIntegrante.textContent = `Ingresa el salario anual del integrante ${i}: `;
        labelCreadoIntegrante.appendChild(inputCreadoIntegrante);
        labelCreadoIntegrante.appendChild(brCreadoIntegrante);
    }
};

// Funcion para cuando se le hace click en el boton "Quitar 1 integrante"

$botonQuitarIntegrante = document.querySelector('#boton-quitar-integrante');

$botonQuitarIntegrante.onclick = function (arrayDeLabelCreados) {
    arrayDeLabelCreados = [
        ...document.querySelectorAll('.label-creado-integrante', 'br'),
    ].map((element) => element);
    arrayDeLabelCreados.pop().remove();
};

// Funcion para cuando se le hace click en el boton "Calcular"

$botonCalcular = document.querySelector('#boton-calcular');

$botonCalcular.onclick = function (arraySalarioAnual) {
    const MESESANIO = 12;

    arraySalarioAnual = [
        ...document.querySelectorAll('.input-creado-integrante'),
    ]
        .map((element) => element.value)
        .filter((element) => element.length > 0)
        .map((element) => Number(element));

    $labelSalarioAnualMayor = document.querySelector('#salario-anual-mayor');
    $labelSalarioAnualMayor.innerText = numeroMasGrande(arraySalarioAnual);

    $labelSalarioAnualMenor = document.querySelector('#salario-anual-menor');
    $labelSalarioAnualMenor.innerText = numeroMasChico(arraySalarioAnual);

    $labelSalarioPromedioAnual = document.querySelector(
        '#salario-anual-promedio'
    );
    $labelSalarioPromedioAnual.innerText = numeroPromedio(arraySalarioAnual);

    $labelSalarioPromedioMensual = document.querySelector(
        '#salario-mensual-promedio'
    );
    $labelSalarioPromedioMensual.innerText = Math.trunc(
        numeroPromedio(arraySalarioAnual) / MESESANIO
    );
};
