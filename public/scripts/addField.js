//Procurar o botão
document.querySelector("#add-time").addEventListener("click", cloneField)
// Quando clicar no botao

//Executar uma ação
function cloneField() {

    //Duplicar os campos
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    //limpar os campos de time
    const fields = newFieldContainer.querySelectorAll("input")
    
    fields.forEach(function(field) {
        field.value = ""
    })

    //Colocar na página
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}