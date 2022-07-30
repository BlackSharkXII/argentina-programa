const $botonCalcular = document.querySelector('#boton-calcular');

$botonCalcular.onclick = function () {
    /*Las constantes se guardan en un array para luego sumarlas con las funcion devolverValorToltal*/
    const $horasVideos = [...document.querySelectorAll('.clase-horas')];
    const $minutosVideos = [...document.querySelectorAll('.clase-minutos')];
    const $segundosVideos = [...document.querySelectorAll('.clase-segundos')];

    let valorTotalHoras = $horasVideos
        .map((valor) => Number(valor.value))
        .reduce((valorPrimero, valorUltimo) => valorPrimero + valorUltimo, 0);
    let valorTotalMinutos = $minutosVideos
        .map((valor) => Number(valor.value))
        .reduce((valorPrimero, valorUltimo) => valorPrimero + valorUltimo, 0);
    let valorTotalSegundos = $segundosVideos
        .map((valor) => Number(valor.value))
        .reduce((valorPrimero, valorUltimo) => valorPrimero + valorUltimo, 0);

    valorTotalMinutos += valorTotalSegundos / 60;
    valorTotalSegundos = valorTotalSegundos % 60;

    valorTotalHoras += valorTotalMinutos / 60;
    valorTotalMinutos = valorTotalMinutos % 60;

    const $mensajeResultado = document.querySelector('#mensaje-resultado');
    $mensajeResultado.innerHTML = `Las clases duran en total: ${Math.trunc(
        valorTotalHoras
    )} horas, ${Math.trunc(valorTotalMinutos)} minutos, ${Math.trunc(
        valorTotalSegundos
    )} segundos`;
    return false;
};
