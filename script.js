var button = document.getElementById("btn");
let form = {
    nome: "",
    telefone: "",
    email:"",
  };


button.onclick = function logSubmit(event) {
    event.preventDefault();

    let form = {
        nome: document.getElementById("nome"),
        telefone: document.getElementById("telefone"),
        email:document.getElementById("email"),
      };


    alert("Obrigado por enviar")

    setTimeout(() => {
        // location.reload()

        console.log(`Informações`);
        console.log(`Nome`,form.nome.value);
        console.log(`Telefone`,form.telefone.value);
        console.log(`Email`,form.email.value);
        
    }, 2000);
   
  }
  

  