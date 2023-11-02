export class Curriculo {
    id: number=0;
    nome: string='';
    sobrenome: string='';
    email: string='';
    telefone: string='';
    endereco: string='';
    formacaoAcademica: string='';
    
    constructor(
    id: number,
    nome: string,
    sobrenome: string,
    email: string,
    telefone: string,
    endereco: string,
    formacaoAcademica: string,
 
    ) {
    this.id = id;
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.telefone = telefone;
    this.endereco = endereco;
    this.formacaoAcademica = formacaoAcademica;

    }
    }