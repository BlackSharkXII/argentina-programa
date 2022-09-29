function obtenerNumeroPromedio(numeros) {
    let acumulador = 0;
    for (let i = 0; i < numeros.length; i++) {
        acumulador += numeros[i];
    }
    const promedio = acumulador / numeros.length;
    return Math.trunc(promedio);
}

function obtenerNumeroMasChico(numeros) {
    let numeroMasChico = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeroMasChico >= numeros[i]) {
            numeroMasChico = numeros[i];
        }
    }
    return numeroMasChico;
}

function obtenerNumeroMasGrande(numeros) {
    let numeroMasGrande = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeroMasGrande <= numeros[i]) {
            numeroMasGrande = numeros[i];
        }
    }
    return numeroMasGrande;
}

function eliminarLabel() {
    const labelCreado = [...document.querySelectorAll('.label-creado')].map(
        (element) => element.remove()
    );

    const inputCreado = [...document.querySelectorAll('.input-creado')].map(
        (element) => element.remove()
    );

    const brCreado = [...document.querySelectorAll('.br-creado')].map(
        (element) => element.remove()
    );

    const liCreado = [...document.querySelectorAll('.li-creado')].map(
        (element) => element.remove()
    );
}

function eliminarMensajesErroresRepetidos() {
    const $mensajesError = [...document.querySelectorAll('li')].map(
        (element) => {
            if (element.className == 'li-creado') {
                element.remove();
            }
        }
    );
}

function cambiarClaseError() {
    const $entradasConError = [...document.querySelectorAll('input')].map(
        (element) => {
            if (element.className == 'error') {
                element.className = 'input-creado';
            } else {
                return '';
            }
        }
    );
}
