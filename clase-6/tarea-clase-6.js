/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.
Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
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

// Funcion para cuando se haga click en el boton "enviar"

const $botonEnviar = document.querySelector('#boton-enviar');

$botonEnviar.onclick = function (integrantesFamilia) {
    $divPregunta = document.querySelector('#pregunta');
    integrantesFamilia = Number(
        document.querySelector('#preguntar-cantidad-familia').value
    );

    for (i = 1; i <= integrantesFamilia; i++) {
        const labelPregunta = document.createElement('label');
        $divPregunta.appendChild(labelPregunta);
        labelPregunta.id = `pregunta-edad-label-${i}`;
        labelPregunta.textContent = `Ingrese la edad de la persona ${i} `;

        const brPregunta = document.createElement('br');
        $divPregunta.appendChild(brPregunta);

        const inputPregunta = document.createElement('input');
        $divPregunta.appendChild(inputPregunta);
        inputPregunta.className = `pregunta-edad-input`;
        inputPregunta.type = 'number';

        $divPregunta.appendChild(brPregunta);
    }
};

// Funcion para cuando se haga click en el boton "enviar"

const $botonCalcular = document.querySelector('#boton-calcular');

$botonCalcular.onclick = function () {
    const arrayEdades = [
        ...document.querySelectorAll('.pregunta-edad-input'),
    ].map((element) => Number(element.value));

    $labelResultadoMayor = document.querySelector('#resultado-mayor');
    $labelResultadoMayor.innerText = numeroMasGrande(arrayEdades);

    $labelResultadoMenor = document.querySelector('#resultado-menor');
    $labelResultadoMenor.innerText = numeroMasChico(arrayEdades);

    $labelResultadoPromedio = document.querySelector('#resultado-promedio');
    $labelResultadoPromedio.innerText = numeroPromedio(arrayEdades);
};
