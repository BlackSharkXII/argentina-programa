function validarSalarios(salario) {
    const expreg = /^[0-9]+$/;

    if (salario == 0) {
        return 'Este campo debe de tener minimo un caracter';
    }

    if (expreg.test(salario) === false) {
        return 'Solo se acepta numeros';
    }

    return '';
}

function probarValidarSalarios() {
    console.assert(
        validarSalarios('') === 'Este campo debe de tener minimo un caracter',
        'No se pudo validar la cantidad de caracteres.'
    );

    console.assert(
        validarSalarios('a') === 'Solo se acepta numeros',
        'No se pudo validar que solo se ingresa numeros'
    );
}

probarValidarSalarios();
