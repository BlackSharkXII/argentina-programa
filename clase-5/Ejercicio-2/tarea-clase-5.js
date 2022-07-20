const $botonIngresar = document.querySelector('#ingresar');
const $mensajeUsuario = document.querySelector('#resultado');

$botonIngresar.onclick = function () {
  const $nombreUsuario = document.querySelector('#nombre-usuario').value;
  $mensajeUsuario.innerText = `Bienvenido ${$nombreUsuario}!`;
  return false;
};
