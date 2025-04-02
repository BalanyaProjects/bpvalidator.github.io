// Lista de claves permitidas
const validKeys = ["ABC123", "DEF456"];

window.onload = function() {
    // Obtener el parámetro 'key' desde la URL
    const urlParams = new URLSearchParams(window.location.search);
    const key = urlParams.get("key");

    // Inicializamos la respuesta
    let response = { status: "error", message: "Acceso denegado" };

    // Comprobamos si la clave es válida
    if (key && validKeys.includes(key)) {
        response = { status: "ok", message: "Acceso permitido" };
    }

    // Mostrar el resultado en el campo con id 'validationResult'
    const resultDiv = document.getElementById("validationResult");
    resultDiv.innerText = JSON.stringify(response); // Insertamos el JSON en el div
};
