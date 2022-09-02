function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe de tener al menos 1 caracter',
        'validarNombre no validó que el nombre no sea vacío'
    );

    console.assert(
        validarNombre(
            '1111111111111111111111111111111111111111111111111111111111111111111111'
        ) === 'Este campo debe de tener menos de 50 caracteres',
        'validarNombre no validó que el nombre sea menor a 50 caracteres'
    );
}

probarValidarNombre();

function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'Debe de seleccionar una ciudad',
        'validarCiudad no valido que no seleccionara una ciudad'
    );
}

probarValidarCiudad();

function probarValidarDescripcion() {
    console.assert(
        validarDescripcionRegalo('') ===
            'Este campo debe de tener al menos 1 caracter',
        'validarDescripcionRegalo no valido que la descripcion estuviera vacia'
    );

    console.assert(
        validarDescripcionRegalo(
            'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        )
    ) === 'Este campo debe de tener menos de 100 caracteres',
        'validarDescripcionRegalo no valido que la descripcion sea menor a 100 caracteres';

    console.assert(
        validarDescripcionRegalo('ñ') === 'Debe de ingresar un caracter valido',
        'validarDescripcionRegalo no valido que se tenga un caracteres validos'
    );
}

probarValidarDescripcion();
