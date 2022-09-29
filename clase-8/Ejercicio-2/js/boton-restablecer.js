const $botonRestablecer = document.querySelector('#boton-restablecer');

$botonRestablecer.onclick = function () {
    eliminarLabel();

    const $seccionPregunta = document.querySelector('#seccion-pregunta');
    $seccionPregunta.className = '';

    const $seccionEdades = document.querySelector('#seccion-edades');
    $seccionEdades.className = 'oculto';

    const $resultadoMayor = document.querySelector('#resultado-mayor');
    $resultadoMayor.innerText = '';

    const $resultadoMenor = document.querySelector('#resultado-menor');
    $resultadoMenor.innerText = '';

    const $resultadoPromedio = document.querySelector('#resultado-promedio');
    $resultadoPromedio.innerText = '';

    const elementoError = [...document.querySelectorAll('.error')].map(
        (element) => element.remove()
    );
};
