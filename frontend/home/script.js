var baseURL = "http://localhost:3000"
var token = localStorage.getItem('token');
var parametro;
var paramValue;
var clicked  = 0;


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
        clicked++;
        var valorPesquisa = document.getElementById("valorPesquisa").value
        paramValue = valorPesquisa;
        if(!paramValue) {
            alert("Não é possível uma consulta vazia!")
            return;
        }
        
        await axios.get(`${baseURL}/aluno/${parametro}/${paramValue}`,paramValue).then(res => {
           if(res.data) {
            if(clicked >= 2) {
                clearPastListings();
            }
            generateSearchedStudent(res.data,clicked)
           
           }
        })

    })
}

function generateSearchedStudent(student,clicked) {
    
   let divResult = document.getElementsByClassName('result-consulta')[0]
   let studentName = document.createElement("h2");
   let studentCpf = document.createElement("h5");
   let studentEmail = document.createElement("h5");
   let studentSexo = document.createElement("h5");
   let studentEndereco = document.createElement("h5");
   let studentDataNascimento = document.createElement("h5");
   let studentCurso = document.createElement("h5");
   let studentMatricula = document.createElement("h5");
   let studentTurno = document.createElement("h5");
   

   studentName.innerHTML = `${student.nome}`
   studentCpf.innerHTML = `CPF: ${student.cpf}`
   studentEmail.innerHTML = `Email: ${student.email}`
   studentSexo.innerHTML = `Sexo: ${student.sexo}`
   studentEndereco.innerHTML = `Endereco: ${student.endereco}`
   studentDataNascimento.innerHTML = `Data de Nascimento: ${moment(student.DataNascimento).format("DD/MM/YYYY")}`
   studentCurso.innerHTML = `Curso: ${student.curso}`
   studentMatricula.innerHTML = `Matricula: ${student.matricula}`
   studentTurno.innerHTML = `Turno: ${student.turno}`
   

   divResult.appendChild(studentName);
   divResult.appendChild(studentCpf);
   divResult.appendChild(studentEmail);
   divResult.appendChild(studentSexo);
   divResult.appendChild(studentEndereco);
   divResult.appendChild(studentDataNascimento);
   divResult.appendChild(studentCurso);
   divResult.appendChild(studentMatricula);
   divResult.appendChild(studentTurno);

 

   

}


function clearPastListings() {
    let divResult = document.getElementsByClassName('result-consulta')[0]
    let totalToRemove = 9;
    for(let i = 0; i<totalToRemove; i++){
        console.log(divResult.firstChild)
        divResult.removeChild(divResult.lastChild);
    }
    

}





















