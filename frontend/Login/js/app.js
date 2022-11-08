
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");
var body = document.querySelector("body");
var baseURL = "http://localhost:3000"

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
    if((!checkBlankValuesToRegisterAnUser(nome,email,password))) {
     try {
      await axios.post(`${baseURL}/user`,{
        nome,
        email,
        password
      }).then(response => {
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

async function login() {
    event.preventDefault();
    let email = document.getElementsByName("emailLogin")[0].value;
    let password = document.getElementsByName("passwordLogin")[0].value;
    if(!checkBlankValuesToLogin(email,password)) {
        
        try {
            await axios.post(`${baseURL}/user/login`,{
                    email,
                    password
            }).then(response => {
              console.log(response.data);

            }).catch(e => {
                console.log(e);
                let textResponse = document.getElementsByClassName("description description-second")[1];
                let textFailed = document.createElement('div');
                textFailed.style.color = 'red';
                textFailed.innerHTML = `Falha ao Cadastrar usuário`
                textResponse.appendChild(textFailed);
            }) 
                
            

        } catch(e) {
            console.log(e);
            let textResponse = document.getElementsByClassName("description description-second")[1];
            let textFailed = document.createElement('div');
            textFailed.style.color = 'red';
            textFailed.innerHTML = `Falha ao Cadastrar usuário`
            textResponse.appendChild(textFailed);
        }
    } else {
        alert("Formato/tamanho de email e senha invalidos!")
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

const checkBlankValuesToRegisterAnUser = (name,email,password) => {

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

const checkBlankValuesToLogin = (email,password) => {

    if(email === '' || password === '') {
        return true;
    } else if (email.length <= 3 || password.length < 8) {
        return true;
    } else if (password.length <= 0 || email.length <= 0){
        return true;
    } else {
        return false;
    }
    
}


