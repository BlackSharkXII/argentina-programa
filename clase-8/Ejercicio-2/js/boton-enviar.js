const $botonEnviar = document.querySelector('#boton-enviar');

$botonEnviar.onclick = function () {
    eliminarLabel();

    const $seccionPregunta = document.querySelector('#seccion-pregunta');
    const $seccionEdades = document.querySelector('#seccion-edades');
    const $labelInputEdades = document.querySelector('#label-input-edades');
    const cantidadFamiliares = Number(
        document.querySelector('#preguntar-cantidad-familia').value
    );

    manejarErrorIntegrante(cantidadFamiliares);

    for (i = 1; i <= cantidadFamiliares; i++) {
        const textoPregunta = document.createElement('label');
        $labelInputEdades.appendChild(textoPregunta);
        textoPregunta.id = `pregunta-edad-label-${i}`;
        textoPregunta.textContent = `Ingrese la edad de la persona ${i} `;
        textoPregunta.className = 'label-creado';

        const espaciadoPregunta = document.createElement('br');
        $labelInputEdades.appendChild(espaciadoPregunta);
        espaciadoPregunta.className = 'br-creado';

        const preguntaEdad = document.createElement('input');
        $labelInputEdades.appendChild(preguntaEdad);
        preguntaEdad.id = `pregunta-edad-input-${i}`;
        preguntaEdad.className = 'input-creado';

        $labelInputEdades.appendChild(espaciadoPregunta);

        $seccionPregunta.className = 'oculto';
        $seccionEdades.className = '';
    }
};
