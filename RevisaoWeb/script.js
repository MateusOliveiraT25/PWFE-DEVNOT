let nome = document.getElementById('pNome').value;
let endereco = document.getElementById('pEndereco').value;
let cidade = document.getElementById('pCidade').value;
let email = document.getElementById('pEmail').value;
let emailConf = document.getElementById('pEmailC').value;
let senha = document.getElementById('pSenha').value;
let senhaConf = document.getElementById('pSenhaC').value;
function Enviar() {
 if (nome == "") 
     alert("Prencha todos os campos")
     if (endereco == "") 
         alert("Prencha todos os campos")
         if (cidade == "") 
             alert("Prencha todos os campos")
             if (email == "") 
                 alert("Prencha todos os campos")
                 if (emailConf == "") 
                 alert("Prencha todos os campos")
                 if (email == emailConf) 
                 alert("Email não bate")
                 if (senha == "")  

 
     function verificarEmail() {
 if (email!= emailConf)
 alert("Emails não batem")
}
// Activate Carousel
$("#carouselExampleIndicators").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
  $("#carouselExampleIndicators").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
  $("#carouselExampleIndicators").carousel("prev");
})}
