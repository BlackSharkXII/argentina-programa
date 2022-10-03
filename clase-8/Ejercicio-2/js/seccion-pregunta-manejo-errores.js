function manejoErrorIntegrante(integrantesFamilia) {
    mensajeError = validarIntegrantes(integrantesFamilia);
    $labelErrores = document.querySelector('#mensaje-error-pregunta');

    if (mensajeError === '') {
        return '';
    } else {
        eliminarLabel();
        document.querySelector('#preguntar-cantidad-familia').className =
            'error';
        const $error = document.createElement('label');
        $error.className = 'label-creado';
        $error.innerText = mensajeError;
        $labelErrores.appendChild($error);
    }
}
