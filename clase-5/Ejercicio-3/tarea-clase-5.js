const $botonCalcular = document.querySelector('#boton-calcular');

$botonCalcular.onclick = function () {
    const $mensajeResultado = document.querySelector('#mensaje-resultado');
    $mensajeResultado.innerHTML = 'Las clases duran en total: ';
    return false;
};
