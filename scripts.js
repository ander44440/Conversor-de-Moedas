const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
//const especifica que um valor de variável é constante e informa 
//o compilador para impedir que o programador a modifique. 


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-Value-to-convert") // valor em Real
    const currencyValueConverted = document.querySelector(".currency-Value") // valor em outras moedas
    //Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript 
    //- um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, 
    //você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.

    console.log(currencySelect.value)

    const dolarTuday = 5.2
    const euroTuday = 6.2



    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en", {
            style: "currency", currency: "USD"
        }).format(inputCurrencyValue / dolarTuday)

    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "EUR"
        }).format(inputCurrencyValue / euroTuday)
        //A condicional if é uma estrutura condicional que executa a afirmação, dentro do bloco, 
        //se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de else.
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency", currency: "BRL"
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

        currencyImage.src = "./assets/Euro.png"
    
    }

convertValues()

}

currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValues)