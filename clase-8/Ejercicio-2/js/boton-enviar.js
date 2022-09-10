const $botonEnviar = document.querySelector('#boton-enviar');

$botonEnviar.onclick = function (integrantesFamilia) {
    eliminarLabel();

    const $divPregunta = document.querySelector('#seccion-pregunta');

    integrantesFamilia = Number(
        document.querySelector('#preguntar-cantidad-familia').value
    );

    validarIntegrantes(integrantesFamilia);
    probarValidarIntegrantes();

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
