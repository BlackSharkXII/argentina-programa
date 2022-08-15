// Obtenemos los valores de los li y lo ponemos un array.

let arrayLi = [...document.querySelectorAll('li')].map(
    (element) => element.innerText
);
