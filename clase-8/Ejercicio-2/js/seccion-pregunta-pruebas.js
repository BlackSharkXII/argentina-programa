function validarIntegrantes(integrante) {
    if (integrante == 0) {
        return 'Este campo debe de tener minimo un caracter';
    }

    const expreg = /^[0-9]+$/;

    if (expreg.test(integrante) === false) {
        return 'Solo se acepta numeros';
    }

    return '';
}

function probarValidarIntegrantes() {
    console.assert(
        validarIntegrantes('') ===
            'Este campo debe de tener minimo un caracter',
        'No se pudo validar la cantidad de integrantes'
    );

    console.assert(
        validarIntegrantes('a') === 'Solo se acepta numeros',
        'No se pudo validar que solo se ingresara los numeros'
    );
}

probarValidarIntegrantes();
