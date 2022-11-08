
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");
var body = document.querySelector("body");
var baseURL = "http://localhost:3000/"

btnSignin.addEventListener("click",function()
{
    body.className = "sign-in-js";
});

btnSignup.addEventListener("click",function() {
    body.className = "sign-up-js";
});


async function cadastrarUsuario() {
    event.preventDefault();
    let textResponse = document.getElementsByClassName("description description-second")[0];
    let nome = document.getElementsByName("name")[0].value;
    let email = document.getElementsByName("email")[0].value;
    let password = document.getElementsByName("password")[0].value;
    if((!checkBlankValues(nome,email,password))) {
     try {
      const usuario = {
        nome,
        email,
        password
      }
      await axios.post(`${baseURL}user`,usuario).then(response => {
            let textSuccess = document.createElement('div');
            textSuccess.style.color = 'green';
            textSuccess.innerHTML = `Usuário cadastrado com sucesso, Pode fazer Login!`
            textResponse.appendChild(textSuccess);
            console.log(response.data)
      })
        
     } catch(e) {
       console.log(e);
       let textFailed = document.createElement('div');
       textFailed.style.color = 'red';
       textFailed.innerHTML = `Falha ao Cadastrar usuário`
       textResponse.appendChild(textFailed);
     }
    } else {
     alert("Valor invalido! Nome: Mínimo 3 caracteres, Senha: Mínimo 8 caracteres!!")
     return;
    }
     
}



/*const getAlunos = () => {
    axios.get("http://localhost:3000/aluno")
    .then(res => {
        const alunos = res.data;
        console.log("ALUNOS",alunos)
    }).catch(e => {
        console.log(e);
    })
}   

getAlunos();
*/

const checkBlankValues = (name,email,password) => {

    if(name === '' || email === '' || password === '') {
        return true;
    } else if (name.length <= 3 || password.length < 8) {
        return true;
    } else if (name.length <= 0 || password.length <= 0 || email.length <= 0){
        return true;
    } else {
        return false;
    }
    
    
}


