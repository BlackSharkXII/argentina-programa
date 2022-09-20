$botonCalcular = document.querySelector('#boton-calcular');

$botonCalcular.onclick = function (arraySalarioAnual) {
    const MESESANIO = 12;

    arraySalarioAnual = [
        ...document.querySelectorAll('.input-creado-integrante'),
    ]
        .map((element) => element.value)
        .filter((element) => element.length > 0)
        .map((element) => Number(element));

    $labelSalarioAnualMayor = document.querySelector('#salario-anual-mayor');
    $labelSalarioAnualMayor.innerText =
        '$ ' + numeroMasGrande(arraySalarioAnual);

    $labelSalarioAnualMenor = document.querySelector('#salario-anual-menor');
    $labelSalarioAnualMenor.innerText =
        '$ ' + numeroMasChico(arraySalarioAnual);

    $labelSalarioPromedioAnual = document.querySelector(
        '#salario-anual-promedio'
    );
    $labelSalarioPromedioAnual.innerText =
        '$ ' + numeroPromedio(arraySalarioAnual);

    $labelSalarioPromedioMensual = document.querySelector(
        '#salario-mensual-promedio'
    );
    $labelSalarioPromedioMensual.innerText =
        '$ ' + Math.trunc(numeroPromedio(arraySalarioAnual) / MESESANIO);
};
