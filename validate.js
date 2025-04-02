// Lista de claves permitidas
const validKeys = ["ABC123", "DEF456"];

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const key = urlParams.get("key");

    let response = { status: "error", message: "NOK" };

    if (key && validKeys.includes(key)) {
        response = { status: "ok", message: "OK" };
    }

    // Escribir la respuesta en el cuerpo del documento
    document.body.innerText = JSON.stringify(response);
};
