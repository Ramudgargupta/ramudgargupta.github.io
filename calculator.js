// =======================================
// PROFESSIONAL CALCULATOR
// =======================================

const display = document.getElementById("display");

// Number / Operator Add
function add(value) {
    display.value += value;
}

// Clear
function clearDisplay() {
    display.value = "";
}

// Delete Last Character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate
function answer() {
    try {
        if (display.value === "") return;

        let expression = display.value.replace(/%/g, "/100");

        display.value = eval(expression);

    } catch {
        display.value = "Error";

        setTimeout(() => {
            display.value = "";
        }, 1000);
    }
}

// Keyboard Support
document.addEventListener("keydown", function (e) {

    const key = e.key;

    if (!isNaN(key) || "+-*/.%".includes(key)) {
        add(key);
    }

    if (key === "Enter") {
        e.preventDefault();
        answer();
    }

    if (key === "Backspace") {
        deleteLast();
    }

    if (key === "Escape") {
        clearDisplay();
    }

});