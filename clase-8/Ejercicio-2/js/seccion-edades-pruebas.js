function validarEdades(edad) {
    if (edad == 0) {
        return 'Este campo debe de tener minimo un caracter';
    }

    const expreg = /^[0-9]+$/;

    if (expreg.test(edad) === false) {
        return 'Este campo solo acepta numeros';
    }

    return '';
}

function probarValidarEdades() {
    console.assert(
        validarEdades('0') === 'Este campo debe de tener minimo un caracter',
        'No se pudo validar la edad'
    );

    console.assert(
        validarEdades('a') === 'Este campo solo acepta numeros',
        'No se pudo validar que solo se ingresara los numeros'
    );
}

probarValidarEdades();
