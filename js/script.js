{

    const calculateResult = (amount, currency) => {
        const rateUSD = 3.9689;
        const rateEUR = 4.4710;
        const rateGEL = 1.2879;

        switch (currency) {
            case "USD":
                return amount / rateUSD;
            case "EUR":
                return amount / rateEUR;
            case "GEL":
                return amount / rateGEL;
        }
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result")
        resultElement.innerHTML = `Otrzymasz: ${amount.toFixed(2)} PLN = <strong> ${result.toFixed(2)} ${currency}</strong>`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount")
        const currencyElement = document.querySelector(".js-currency")

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);
    };


    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}