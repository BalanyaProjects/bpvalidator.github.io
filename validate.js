// Lista de claves permitidas para la validación
const validKeys = ['ABC123', 'DEF456'];

// Función para validar una clave
function validateKey(key) {
    return validKeys.includes(key);
}

// Crear un endpoint de API en el navegador
self.onmessage = function (event) {
    const key = event.data.key;

    if (validateKey(key)) {
        self.postMessage({ status: 'ok', message: 'Acceso permitido' });
    } else {
        self.postMessage({ status: 'error', message: 'Acceso denegado' });
    }
};
