// creating refrences
const fromSelect = document.getElementById('from-currency-select');
const toSelect = document.getElementById('to-currency-select');
const convertBtn = document.getElementById('convert-button');
 let api = `https://v6.exchangerate-api.com/v6/0128cc632ae834007fc3243f/latest/USD`;

//adding currencies to from drop down
currencies.forEach((currency) => {
    let option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromSelect.add(option);
});

//adding currencies to to drop down
currencies.forEach((currency) => {
    let option = document.createElement('option');
    option.value = currency;
    option.text = currency;
    toSelect.add(option);
});

//setting default values
fromSelect.value = "USD";
toSelect.value = "INR";

function convertCurrency() {
    const fromCurrency = fromSelect.value;
    const toCurrency = toSelect.value;
    const amount = document.getElementById('amount').value;
    let result = document.getElementById('result');

    fetch(api)
    .then((res)=>{
        return res.json();
    })
    .then((data) => {
        let fromExchangeRate = data.conversion_rates[fromCurrency];
        const toExchangeRate = data.conversion_rates[toCurrency];

        const convertedAmount = (amount/fromExchangeRate) * toExchangeRate;

        result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    }).catch(console.log);  
}

convertBtn.addEventListener("click",convertCurrency);
window.addEventListener("load",convertCurrency);