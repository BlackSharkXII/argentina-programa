function manejarErrorEdades(edades) {
    $inputCreadosEdades = document.querySelectorAll('.input-creado');
    const $labelResultadoMayor = document.querySelector('#resultado-mayor');
    const $labelResultadoMenor = document.querySelector('#resultado-menor');
    const $labelResultadoPromedio = document.querySelector(
        '#resultado-promedio'
    );
    let cantidadErrores = 0;

    edades.forEach((element) => {
        mensajeError = validarEdades(element);
        $labelErrores = document.querySelector('#mensaje-error-edades');
        $inputCreadosEdades = document.querySelectorAll('.input-creado');

        if (mensajeError === '') {
            return '';
        } else {
            cantidadErrores++;
            const $errorLi = document.createElement('li');

            $errorLi.className = 'li-creado';
            $errorLi.innerText = mensajeError;

            $labelErrores.appendChild($errorLi);
        }
        return cantidadErrores;
    });

    $inputCreadosEdades.forEach((input) => {
        if (validarEdades(input.value) === '') {
            return '';
        } else {
            input.className = 'error';
        }
    });

    if (cantidadErrores > 0) {
        $labelResultadoMayor.innerText = 'Error';
        $labelResultadoMenor.innerText = 'Error';
        $labelResultadoPromedio.innerText = 'Error';
    } else {
        $labelResultadoMayor.innerText = obtenerNumeroMasGrande(edades);
        $labelResultadoMenor.innerText = obtenerNumeroMasChico(edades);
        $labelResultadoPromedio.innerText = obtenerNumeroPromedio(edades);
    }
}
