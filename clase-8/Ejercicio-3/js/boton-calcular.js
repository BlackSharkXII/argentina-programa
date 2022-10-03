const $calcular = document.querySelector('#boton-calcular');

$calcular.onclick = function () {
    const $entradasIntegranteError = [...document.querySelectorAll('.error')];
    const $mensajesError = [...document.querySelectorAll('li')];

    $entradasIntegranteError.forEach((element) => {
        element.className = 'input-creado-integrante';
    });

    $mensajesError.forEach((element) => {
        element.remove();
    });

    const salarioAnual = [
        ...document.querySelectorAll('.input-creado-integrante'),
    ].map((element) => Number(element.value));

    manejarErroresSalarios(salarioAnual);
};
