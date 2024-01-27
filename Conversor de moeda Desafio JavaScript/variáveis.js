
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const currencyValueConverter = document.querySelector(".currency-value-converter")

    const currencyValueConvertido = document.querySelector(".currency-value-convertido")

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 10
    const bitcoinToday = 213.000

   

    if (currencySelect.value == "dolar") {
        currencyValueConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == "euro") {
        currencyValueConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

        if (currencySelect.value == "libra") {
            currencyValueConvertido.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / libraToday)

    }

        if (currencySelect.value == "bitcoin") {
            currencyValueConvertido.innerHTML = new Intl.NumberFormat("en", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue / bitcoinToday)
    
    }

        currencyValueConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

    }

    function changeCurrency() {
        const currencyName = document.getElementById("currency-name")
        const currencyImage = document.querySelector(".currency-img")

        if (currencySelect.value == "dolar") {
            currencyName.innerHTML = "Dólar Americano"
            currencyImage.src = "./assets/US dolar.png"
        }

        if (currencySelect.value == "euro") {
            currencyName.innerHTML = "Euro"
            currencyImage.src = "./assets/EUR moeda.png"
        }

        if (currencySelect.value == "libra") {
            currencyName.innerHTML = "Libra"
            currencyImage.src = "./assets/Libra Moeda.png"
        }

        if (currencySelect.value == "bitcoin") {
            currencyName.innerHTML = "BTC"
            currencyImage.src = "./assets/bitcoin moeda.png"
        }

        convertValues()
    }

    currencySelect.addEventListener("change", changeCurrency)
    convertButton.addEventListener("click", convertValues)