var baseURL = "http://localhost:3000"




document.addEventListener("DOMContentLoaded",() => {
    getElementsFromDOM();

})


function getElementsFromDOM() {
  
    let btnAlterar = document.getElementsByTagName("button")[0];
    

    btnAlterar.addEventListener('click',async () => {
        let token = document.getElementById("input-token").value
        let senha = document.getElementById("input-senha").value
        let repeatSenha = document.getElementById("input-repeat-senha").value
        
    })
}























