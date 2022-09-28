<<<<<<< Updated upstream
function numeroPromedio(numeros) {
    let acumulador = 0;
    for (let i = 0; i < array.length; i++) {
        valorSuma += array[i];
=======
function obtenerNumeroPromedio(numeros) {
    let acumulador = 0;
    for (let i = 0; i < numeros.length; i++) {
        acumulador += numeros[i];
>>>>>>> Stashed changes
    }
    const promedio = acumulador / numeros.length;
    return Math.trunc(promedio);
}

function obtenerNumeroMasChico(numeros) {
<<<<<<< Updated upstream
    let valorMenor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (valorMenor >= array[i]) {
            valorMenor = array[i];
=======
    let numeroMasChico = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeroMasChico >= numeros[i]) {
            numeroMasChico = numeros[i];
>>>>>>> Stashed changes
        }
    }
    return numeroMasChico;
}

function obtenerNumeroMasGrande(numeros) {
    let numeroMasGrande = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeroMasGrande <= numeros[i]) {
            numeroMasGrande = numeros[i];
        }
    }
    return numeroMasGrande;
}

function eliminarLabel(labelCreado, inputCreado, brCreado, liCreado) {
    labelCreado = [...document.querySelectorAll('.label-creado')].map(
        (element) => element.remove()
    );

    inputCreado = [...document.querySelectorAll('.input-creado, .error')].map(
        (element) => element.remove()
    );

    brCreado = [...document.querySelectorAll('.br-creado')].map((element) =>
        element.remove()
    );

    liCreado = [...document.querySelectorAll('.li-creado')].map((element) =>
        element.remove()
    );
}
