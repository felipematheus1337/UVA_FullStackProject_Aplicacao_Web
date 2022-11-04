document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});





function getElements() {
    event.preventDefault();
    let testeCpf = document.getElementById("cpf").value;

    if(!validarCPF(testeCpf)) {
      M.toast({html: 'cpf invalido!'},{displayLength: 2500},{classes:'toast'})
      return 0;
    }

    let nome = getFirstLetterToUpperCase(document.getElementById("nome").value);
    let cpf = document.getElementById("cpf").value;
    let endereco = getFirstLetterToUpperCase(document.getElementById("endereco").value);
    let sexo = getSexoChecked();
    let dataNascimento = document.getElementById("datadenascimento").value;
    let email = document.getElementById("email").value;
    let curso = getFirstLetterToUpperCase(document.getElementById("curso").value);
    let matricula = document.getElementById("matricula").value;
    let turno = getFirstLetterToUpperCase(document.getElementById("turno").value);
    let id = idGenerator()


    if(compareSensitiveValues(cpf,matricula,email)) {
      return;
    }
    

    const aluno = {
        id:id,
        nome:nome,
        cpf:cpf,
        endereco:endereco,
        sexo:sexo,
        dataNascimento:dataNascimento,
        email:email,
        curso:curso,
        matricula:matricula,
        turno:turno
    };

   
    toStorageTheStudents(aluno);
    
   
    
}

function getSexoChecked() {
    let sexos = document.getElementsByName('sexo');
    let sexoChecked;
    console.log(sexos);
    console.log(sexos.length)
    for(let i = 0; i < sexos.length; i++) {
      if(sexos[i].checked) {
        if(i === 0) {
          sexoChecked = 'Masculino';
          return sexoChecked;
        }
        else {
          sexoChecked = 'Feminino';
          return sexoChecked;
        }
      }
    }

    return null;
}

function getFirstLetterToUpperCase(value) {
 const valueInUpperCase = value.charAt(0).toUpperCase() + value.slice(1);
 return valueInUpperCase;

}

function toStorageTheStudents(student) {
    var students = JSON.parse(localStorage.getItem('students')) || [];
    students.push(student)
    localStorage.setItem('students',JSON.stringify(students));
    console.log(JSON.parse(localStorage.getItem('students')));
}

function idGenerator() {
  let id;
  let idToIncrement = JSON.parse(localStorage.getItem('students')) || 1;

  if(!localStorage.getItem('students')) id = idToIncrement;
  else {
     id = idToIncrement.length + 1;
  }
 
  return id;
}


function validarCPF(inputCPF){
  var soma = 0;
  var resto;

  if(inputCPF == '00000000000') return false;
  for(i=1; i<=9; i++) soma = soma + parseInt(inputCPF.substring(i-1, i)) * (11 - i);
  resto = (soma * 10) % 11;

  if((resto == 10) || (resto == 11)) resto = 0;
  if(resto != parseInt(inputCPF.substring(9, 10))) return false;

  soma = 0;
  for(i = 1; i <= 10; i++) soma = soma + parseInt(inputCPF.substring(i-1, i))*(12-i);
  resto = (soma * 10) % 11;

  if((resto == 10) || (resto == 11)) resto = 0;
  if(resto != parseInt(inputCPF.substring(10, 11))) return false;
  return true;
}


compareSensitiveValues = (cpf,matricula,email) => {
let listOfStudentsCpf = JSON.parse(localStorage.getItem('students')) || null;
let iSnegative = false;

if(listOfStudentsCpf != null) {
    iSnegative = listOfStudentsCpf.find(function(iSnegative) {
    if(iSnegative.cpf === cpf) {
      M.toast({html: 'cpf  já cadastrado!'},{displayLength: 2500},{classes:'toast'})
      return true;
    } 
    else if(iSnegative.email === email) {
      M.toast({html: 'email já cadastrado'},{displayLength: 2500},{classes:'toast'})
      return true;
    }
    else if(iSnegative.matricula === matricula) {
      M.toast({html: 'matricula já cadastrada!'},{displayLength: 2500},{classes:'toast'})
      return true;

    } else {
      return false;
    }
  }) || false;
  return iSnegative;
}




return iSnegative;

}

