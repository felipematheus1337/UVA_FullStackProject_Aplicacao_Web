var baseURL = "http://localhost:3000"
var token = localStorage.getItem('token');
var parametro;
var paramValue;

const config = {
    headers: {Authorization: `Bearer ${token}`}
}

document.addEventListener("DOMContentLoaded",() => {
    getElementsFromDOM();
})


function getElementsFromDOM() {
    var select = document.getElementById("parametro")
    parametro = select.value;
    select.addEventListener('change',(e) => {
        select.value = e.target.value;
        parametro = select.value;
    })
    var button = document.getElementById("botaoConsulta")
    button.addEventListener('click',async () => {
        var valorPesquisa = document.getElementById("valorPesquisa").value
        paramValue = valorPesquisa;
        if(!paramValue) {
            alert("Não é possível uma consulta vazia!")
            return;
        }
    })

 

    
    
    
}





















