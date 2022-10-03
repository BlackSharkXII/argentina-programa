function manejarErroresSalarios(salarioAnual) {
    let cantidadErrores = 0;
    const MESESANIO = 12;
    const $salarioAnualMayor = document.querySelector('#salario-anual-mayor');
    const $salarioAnualMenor = document.querySelector('#salario-anual-menor');
    const $salarioPromedioAnual = document.querySelector(
        '#salario-anual-promedio'
    );
    const $salarioPromedioMensual = document.querySelector(
        '#salario-mensual-promedio'
    );

    salarioAnual.forEach((element) => {
        const textoError = validarSalarios(element);
        const $mensajeError = document.querySelector('#mensaje-error');
        const mensajeError = document.createElement('li');

        if (textoError == '') {
            return '';
        } else {
            cantidadErrores++;

            mensajeError.className = 'mensaje-error';
            mensajeError.innerText = textoError;

            $mensajeError.appendChild(mensajeError);
        }
    });

    const $entradaIntegrante = document.querySelectorAll(
        '.input-creado-integrante'
    );
    $entradaIntegrante.forEach((input) => {
        if (validarSalarios(input.value) == '') {
            return '';
        } else {
            input.className = 'error';
        }
    });

    if (cantidadErrores > 0) {
        $salarioAnualMayor.innerText = 'error';
        $salarioAnualMenor.innerText = 'error';
        $salarioPromedioAnual.innerText = 'error';
        $salarioPromedioMensual.innerText = 'error';
    } else {
        $salarioAnualMayor.innerText =
            '$ ' + obtenerNumeroMasGrande(salarioAnual);
        $salarioAnualMenor.innerText =
            '$ ' + obtenerNumeroMasChico(salarioAnual);
        $salarioPromedioAnual.innerText =
            '$ ' + obtenerNumeroPromedio(salarioAnual);
        $salarioPromedioMensual.innerText =
            '$ ' + Math.trunc(obtenerNumeroPromedio(salarioAnual) / MESESANIO);
    }
}
