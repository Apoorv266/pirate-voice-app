var valueInput = document.querySelector("#inputArea")
var outputArea = document.querySelector("#outputBar")
var translateBtn = document.querySelector("#outputBtn")

let translateApi = "https://api.funtranslations.com/translate/pirate.json"

function createURL(text) {
    return translateApi + "?"  + "text="  + text
}

function errorFunc(error) {
    outputArea.innerText = "try again after sometimes", error
}

function tranlatorFunc() {
    var textValue = valueInput.value

    fetch(createURL(textValue)).then(response => response.json()).then(json => outputArea.innerText = json.contents.translated).catch(errorFunc)
}

translateBtn.addEventListener("click", tranlatorFunc)