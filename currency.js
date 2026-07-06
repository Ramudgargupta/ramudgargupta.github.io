// =====================================
// PROFESSIONAL CURRENCY CONVERTER
// Part 1
// =====================================

const amount = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const convertBtn = document.getElementById("convertBtn");
const swapBtn = document.getElementById("swapBtn");
const result = document.getElementById("result");

// Free ExchangeRate API
const API_URL = "https://open.er-api.com/v6/latest/";

async function convertCurrency() {

    const amt = parseFloat(amount.value);

    if (isNaN(amt) || amt <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    const from = fromCurrency.value;
    const to = toCurrency.value;

    result.innerHTML = "Converting...";

    try {

        const response = await fetch(API_URL + from);
        const data = await response.json();

        if (data.result !== "success") {
            result.innerHTML = "Failed to load exchange rates.";
            return;
        }

        const rate = data.rates[to];
        const converted = (amt * rate).toFixed(2);

        result.innerHTML =
        `${amt} ${from} = <br><br><strong>${converted} ${to}</strong>`;

    }

    catch (error) {

        result.innerHTML = "Network Error!";

    }

}

convertBtn.addEventListener("click", convertCurrency);

swapBtn.addEventListener("click", () => {

    let temp = fromCurrency.value;

    fromCurrency.value = toCurrency.value;

    toCurrency.value = temp;

    convertCurrency();

});
// =====================================
// Part 2 Starts Here
// =====================================

// Enter key support
amount.addEventListener("keydown", function(e){

    if(e.key === "Enter"){

        convertCurrency();

    }

});

// Auto convert when currency changes
fromCurrency.addEventListener("change", convertCurrency);

toCurrency.addEventListener("change", convertCurrency);

// Auto convert on page load
window.addEventListener("load", () => {

    fromCurrency.value = "USD";
    toCurrency.value = "INR";
    amount.value = 1;

    convertCurrency();

});