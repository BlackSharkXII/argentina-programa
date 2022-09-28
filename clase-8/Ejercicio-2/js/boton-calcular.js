const $botonCalcular = document.querySelector('#boton-calcular');

$botonCalcular.onclick = function () {
    const liCreado = [...document.querySelectorAll('.li-creado')].map(
        (element) => element.remove()
    );
    const $inputsCreadosError = document.querySelectorAll('.error');
    const edades = [...document.querySelectorAll('.input-creado')].map(
        (element) => Number(element.value)
    );

    $inputsCreadosError.forEach((input) => {
        input.className = 'input-creado';
    });

    manejarErrorEdades(edades);
};
