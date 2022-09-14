const $botonCalcular = document.querySelector('#boton-calcular');
const $divSeccionPregunta = document.querySelector('#seccion-pregunta');
const $divSeccionEdades = document.querySelector('#seccion-edades');

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
