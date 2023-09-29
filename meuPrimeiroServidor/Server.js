const http = require('http');
const fs = require('fs');
//importa  os módulos http e fs(ler arquivos) para o servidor
const server = http.createServer((req,res) =>{
     //createServer cria o servidor local (http://localhost:XXXX)
    //criando uma funcao de requisao e resposta em http
if (req.url === '/'){
fs.readFile('index.html',(err,data)=>{
    if(err){//caso de erro
        res.writeHead(500); // mensagem de erro
        res.end("Erro Server");// mensagem de erro
    }else{//caso tudobem
        res.writeHead(200);
        res.end(data);//retorna index
    }})

}else if(req.url==="/sobre"){
    //se a for soliciado /sobre vai abrir o arquivo sobre.html
    fs.readFile('sobre.html',(err,data)=>{
        if(err){ //caso de erro
            res.writeHead(500); //Mensagem de erro
            res.end("Erro Server"); //Mensagem Erro
        }else{//caso tudo ok
            res.writeHead(200);
            res.end(data);// retorna o index.html
        }
    })
}else {//erro de pagina nao encontrada
    res.writeHead(404);
    res.end("Página não encontrada");// mensagem de erro
}

});

server.listen(3000,()=>{//define a porta de conecçao
    console.log("Servidor Conectado na porta 3000");
}
)