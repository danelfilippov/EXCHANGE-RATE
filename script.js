async function fetchCurrencyRates() {
    const url = "https://open.er-api.com/v6/latest/USD";

        const response = await fetch(url);

        const json = await response.json();
        const rates = json.rates;

        const dataElement = document.querySelector('.data');

        if (dataElement) {
            dataElement.innerHTML = '';

            const currenciesDiv = document.createElement('div');
            const valuesDiv = document.createElement('div');

            currenciesDiv.style.display = 'inline-block';
            currenciesDiv.style.width = '200px'; 
            valuesDiv.style.display = 'inline-block';
            valuesDiv.style.width = '140px'; 

            for (const currency in rates) {
                if (rates.hasOwnProperty(currency)) {
                    const rate = rates[currency];

                    const currencyDiv = document.createElement('div');
                    currencyDiv.textContent = currency;

                    const valueDiv = document.createElement('div');
                    valueDiv.textContent = rate;

                    currenciesDiv.appendChild(currencyDiv);
                    valuesDiv.appendChild(valueDiv);
                }
            }

            dataElement.appendChild(currenciesDiv);
            dataElement.appendChild(valuesDiv);
        }
}
 
fetchCurrencyRates();

setInterval(fetchCurrencyRates, 1000);      