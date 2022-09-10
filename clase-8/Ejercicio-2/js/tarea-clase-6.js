// Funcion para cuando se haga click en el boton "enviar"

const $botonCalcular = document.querySelector('#boton-calcular');

$botonCalcular.onclick = function (arrayEdades) {
    arrayEdades = [...document.querySelectorAll('.pregunta-edad-input')].map(
        (element) => Number(element.value)
    );

    $labelResultadoMayor = document.querySelector('#resultado-mayor');
    $labelResultadoMayor.innerText = numeroMasGrande(arrayEdades);

    $labelResultadoMenor = document.querySelector('#resultado-menor');
    $labelResultadoMenor.innerText = numeroMasChico(arrayEdades);

    $labelResultadoPromedio = document.querySelector('#resultado-promedio');
    $labelResultadoPromedio.innerText = numeroPromedio(arrayEdades);
};

// Funcion para cuando se haga click en el boton "restablecer"

const $botonRestablecer = document.querySelector('#boton-restablecer');

$botonRestablecer.onclick = function () {
    eliminarLabel();
};
