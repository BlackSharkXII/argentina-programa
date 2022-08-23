/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.
Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

// Funcion para cuando se haga click en el boton "enviar"

const $botonEnviar = document.querySelector('#boton-enviar');

$botonEnviar.onclick = function ponerInputLabel(integrantesFamilia) {
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
        inputPregunta.id = `pregunta-edad-input-${i}`;

        $divPregunta.appendChild(brPregunta);
    }
};
