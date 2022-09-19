function numeroPromedio(array) {
    let valorSuma = 0;
    for (let i = 0; i < array.length; i++) {
        valorSuma += array[i];
    }
    const promedio = valorSuma / array.length;
    return Math.trunc(promedio);
}

function numeroMasChico(array) {
    let valorMenor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (valorMenor >= array[i]) {
            valorMenor = array[i];
        }
    }
    return valorMenor;
}

function numeroMasGrande(array) {
    let valorMayor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (valorMayor <= array[i]) {
            valorMayor = array[i];
        }
    }
    return valorMayor;
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
