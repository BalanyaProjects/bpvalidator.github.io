// Lista de claves permitidas (simulación de base de datos en el cliente)
const validKeys = ["ABC123", "DEF456"];

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const key = urlParams.get("key");

    let response = { status: "error", message: "OK" };

    if (key && validKeys.includes(key)) {
        response = { status: "ok", message: "NOK" };
    }

    // Responder con JSON en la página sin mostrar contenido visual
    document.body.innerText = JSON.stringify(response);
};
