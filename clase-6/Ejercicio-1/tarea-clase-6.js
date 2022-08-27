/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.
Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

// Funcion para cuando se haga click en el boton "enviar"

const $botonEnviar = document.querySelector('#boton-enviar');

$botonEnviar.onclick = function (integrantesFamilia) {
    const $divPregunta = document.querySelector('#pregunta');
    integrantesFamilia = Number(
        document.querySelector('#preguntar-cantidad-familia').value
    );
    for (i = 1; i <= integrantesFamilia; i++) {
        const labelPregunta = document.createElement('label');
        $divPregunta.appendChild(labelPregunta);
        labelPregunta.id = `pregunta-edad-label-${i}`;
        labelPregunta.textContent = `Ingrese la edad de la persona ${i} `;
        labelPregunta.className = 'label-creado';

        const brPregunta = document.createElement('br');
        $divPregunta.appendChild(brPregunta);
        brPregunta.className = 'br-creado';

        const inputPregunta = document.createElement('input');
        $divPregunta.appendChild(inputPregunta);
        inputPregunta.className = `pregunta-edad-input`;
        inputPregunta.type = 'number';

        $divPregunta.appendChild(brPregunta);
    }
};

// Funcion para cuando se haga click en el boton "enviar"

const $botonCalcular = document.querySelector('#boton-calcular');

$botonCalcular.onclick = function (arrayEdades) {
    arrayEdades = [...document.querySelectorAll('.pregunta-edad-input')].map(
        (element) => Number(element.value)
    );

    $labelResultadoMayor = document.querySelector('#resultado-mayor');
    $labelResultadoMayor.innerText = numeroMasGrande(arrayEdades);

    $labelResultadoMenor = document.querySelector('#resultado-menor');
    $labelResultadoMenor.innerText = numeroMasChico(arrayEdades);

    $labelResultadoPromedio = document.querySelector('#resultado-promedio');
    $labelResultadoPromedio.innerText = numeroPromedio(arrayEdades);
};

// Funcion para cuando se haga click en el boton "restablecer"

const $botonRestablecer = document.querySelector('#boton-restablecer');

$botonRestablecer.onclick = function (labelCreado, inputCreado, brCreado) {
    labelCreado = [...document.querySelectorAll('.label-creado')].map(
        (element) => element.remove()
    );

    inputCreado = [...document.querySelectorAll('.pregunta-edad-input')].map(
        (element) => element.remove()
    );

    brCreado = [...document.querySelectorAll('.br-creado')].map((element) =>
        element.remove()
    );
};
