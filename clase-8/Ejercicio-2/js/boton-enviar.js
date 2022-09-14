const $botonEnviar = document.querySelector('#boton-enviar');

$botonEnviar.onclick = function (integrantesFamilia) {
    eliminarLabel();

    const $divSeccionPregunta = document.querySelector('#seccion-pregunta');
    const $divSeccionEdades = document.querySelector('#seccion-edades');
    const $labelInputEdades = document.querySelector('#label-input-edades');

    integrantesFamilia = Number(
        document.querySelector('#preguntar-cantidad-familia').value
    );

    validarIntegrantes(integrantesFamilia);
    probarValidarIntegrantes();
    manejoErrorIntegrante(integrantesFamilia);

    for (i = 1; i <= integrantesFamilia; i++) {
        const labelPregunta = document.createElement('label');
        $labelInputEdades.appendChild(labelPregunta);
        labelPregunta.id = `pregunta-edad-label-${i}`;
        labelPregunta.textContent = `Ingrese la edad de la persona ${i} `;
        labelPregunta.className = 'label-creado';

        const brPregunta = document.createElement('br');
        $labelInputEdades.appendChild(brPregunta);
        brPregunta.className = 'br-creado';

        const inputPregunta = document.createElement('input');
        $labelInputEdades.appendChild(inputPregunta);
        inputPregunta.className = `pregunta-edad-input`;
        inputPregunta.type = 'number';

        $labelInputEdades.appendChild(brPregunta);

        $divSeccionPregunta.className = 'oculto';
        $divSeccionEdades.className = '';
    }
};
