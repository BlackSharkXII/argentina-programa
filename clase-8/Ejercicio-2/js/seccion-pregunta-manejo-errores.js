function manejarErrorIntegrante(integrantesFamilia) {
    const mensajeError = validarIntegrantes(integrantesFamilia);
    const $labelErrores = document.querySelector('#mensaje-error-pregunta');

    if (mensajeError === '') {
        return '';
    } else {
        eliminarLabel();
        document.querySelector('#preguntar-cantidad-familia').className =
            'error';
        const $error = document.createElement('li');
        $error.className = 'label-creado';
        $error.innerText = mensajeError;
        $labelErrores.appendChild($error);
    }
}
