// Lista de claves permitidas
const validKeys = ["ABC123", "DEF456"];

function validateKey() {
    let key = document.getElementById("keyInput").value;
    let resultText = document.getElementById("result");

    if (validKeys.includes(key)) {
        resultText.innerHTML = "<span style='color:green;'>OK</span>";
    } else {
        resultText.innerHTML = "<span style='color:red;'>NOK</span>";
    }
}

// Validación a través de URL con parámetro ?key=
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const key = urlParams.get("key");

    if (key) {
        let resultText = document.getElementById("result");
        if (validKeys.includes(key)) {
            resultText.innerHTML = "<span style='color:green;'>Acceso permitido</span>";
        } else {
            resultText.innerHTML = "<span style='color:red;'>Acceso denegado</span>";
        }
    }
};
