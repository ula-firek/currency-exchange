let formElement = document.querySelector(".js-form")
let amountElement = document.querySelector(".js-amount")
let currencyElement = document.querySelector(".js-currency")
let resultElement = document.querySelector(".js-result")


let rateUSD = 3.9689;
let rateEUR = 4.4710;
let rateGEL = 1.2879;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();


    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "USD":
            result = amount / rateUSD
            break;
        case "EUR":
            result = amount / rateEUR
            break;
        case "GEL":
            result = amount / rateGEL
            break;
    }

    resultElement.innerHTML = `Otrzymasz: ${amount.toFixed(2)} PLN = <strong> ${result.toFixed(2)} ${currency}</strong>`;
});