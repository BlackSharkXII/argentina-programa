function obtenerNumeroPromedio(numeros) {
    let acumulador = 0;
    for (let i = 0; i < numeros.length; i++) {
        acumulador += numeros[i];
    }
    const promedio = acumulador / numeros.length;
    return Math.trunc(promedio);
}

function obtenerNumeroMasChico(numeros) {
    let numeroMasChico = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeroMasChico >= numeros[i]) {
            numeroMasChico = numeros[i];
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
