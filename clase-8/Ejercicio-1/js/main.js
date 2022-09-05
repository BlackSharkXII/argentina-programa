function validarNombre(nombre) {
    if (nombre.length === 0) {
        return 'El campo de nombre debe de tener al menos 1 caracter';
    }

    if (nombre.length > 50) {
        return 'Este campo debe de tener menos de 50 caracteres';
    }

    const expreg = /^[a-z]+$/i;

    if (expreg.test(nombre) === false) {
        return 'Debe de ingresar solo letras para el nombre';
    }
    return '';
}

function validarCiudad(ciudad) {
    if (ciudad.length === 0) {
        return 'Debe de seleccionar una ciudad';
    }

    return '';
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length === 0) {
        return 'El campo de descripcion debe de tener al menos 1 caracter';
    }

    if (descripcionRegalo.length >= 100) {
        return 'Este campo debe de tener menos de 100 caracteres';
    }

    const expreg = /^[a-z0-9 ]+$/i;

    if (expreg.test(descripcionRegalo) === false) {
        return 'Debe de ingresar un caracter valido';
    }
    return '';
}

function validarFormulario(evento) {
    [...document.querySelectorAll('#errores li')].map((element) =>
        element.remove()
    );

    const $form = document.querySelector('#carta-a-santa');

    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form['descripcion-regalo'].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo,
    };

    const esExito = manejarErrores(errores) === 0;

    if (esExito) {
        $form.className = 'oculto';
        document.querySelector('#exito').className = '';
    }

    evento.preventDefault();
}

function manejarErrores(errores) {
    const llaves = Object.keys(errores);
    const $errores = document.querySelector('#errores');
    let cantidadErrores = 0;

    llaves.forEach(function (llave) {
        const error = errores[llave];

        if (error) {
            cantidadErrores++;
            $form[llave].className = 'error';

            const $error = document.createElement('li');
            $error.innerText = error;
            $errores.appendChild($error);
        } else {
            $form[llave].className = '';
        }
    });
    return cantidadErrores;
}

const $form = document.querySelector('#carta-a-santa');
$form.onsubmit = validarFormulario;
