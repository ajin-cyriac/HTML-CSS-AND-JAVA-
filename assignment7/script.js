
let display = document.getElementById("display");
function addValue(value) {
    if (display.value === "error") {
        display.value = "";
    }
    display.value += value;
}
function clearDisplay() {
    display.value = "";
}
function deleteLast() {
    display.value = display.value.slice(0, -1);
}
function calculate() {
    try {
        let expression = display.value;
        if (expression === "") {
            return;
        }
        if (!/^[0-9+\-*/%.() ]+$/.test(expression)) {
            display.value = "error";
            return;
        }
        let result = Function("return (" + expression + ")")();
        if (!Number.isFinite(result)) {
            display.value = "error";
        } else {
            display.value = result;
        }
    } catch {
        display.value = "error";
    }
}
document.addEventListener("keydown", function(event) {
    let key = event.key;
    if ("0123456789+-*/%.".includes(key) && key !== "") {
        addValue(key);
    } else if (key === "Enter" || key === "=") {
        calculate();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});
