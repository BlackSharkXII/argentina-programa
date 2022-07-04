// Tarea 1

let nombreUsuario = prompt('¿Cuál es tú nombre?').toLocaleLowerCase();

if (nombreUsuario === 'braian') {
  alert(`Hola, tocayo! Yo también me llamo ${nombreUsuario}`);
} else if (nombreUsuario === 'Luis') {
  alert(`Hola ${nombreUsuario}, te llamas igual que mi tío.`);
} else {
  alert(`Hola ${nombreUsuario}`);
}

// Tarea 2

let edadUsuario = Number(prompt('¿Cuál es tú edad?'));

if (edadUsuario === 23) {
  alert(`Oh!, parece que tienes ${edadUsuario}, tenemos la misma edad.`);
} else if (edadUsuario < 23) {
  alert(`Tienes ${edadUsuario}, sos mas chico que yo`);
} else if (edadUsuario > 23) {
  alert(`Tienes ${edadUsuario}, eres mas grande que yo`);
}

// Tarea 3

let documentoUsuario = prompt(
  '¿Tienes documento para entrar al bar? (Constesta con Si o No).'
).toLowerCase();
let edadUsuarioBar;

if (documentoUsuario === 'si') {
  edadUsuarioBar = prompt('¿Cuál es tú edad?.');
  if (edadUsuarioBar >= 18) {
    alert('Puedes entrar al bar.');
  } else if (edadUsuarioBar < 18) {
    alert('No puedes entrar al bar.');
  }
} else if (documentoUsuario === 'no') {
  alert('No tienes documentos, no puede pasar al bar.');
} else {
  alert('No entendi la respuesta.');
}
