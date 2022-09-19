const $botonCalcular = document.querySelector('#boton-calcular');

$botonCalcular.onclick = function (arrayEdades) {
    liCreado = [...document.querySelectorAll('.li-creado')].map((element) =>
        element.remove()
    );
    const $inputCreadosError = document.querySelectorAll('.error');

    $inputCreadosError.forEach((input) => {
        input.className = 'input-creado';
    });

    arrayEdades = [...document.querySelectorAll('.input-creado')].map(
        (element) => Number(element.value)
    );

    manejoErrorEdades(arrayEdades);
};
