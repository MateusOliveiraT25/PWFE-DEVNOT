<template>
    <div class="catalogo-musicas">
        <h2>Catálogo de Livros</h2>
        <input v-model="novoLivro" @keyup.enter="adicionarLivro" placeholder="Digite um novo livro" />
        <ul>
            <button @click="adicionarLivro(livro)">Adicionar Livro</button>
            <li v-for="(livro, index) in livros" :key="index">
                {{ livro.titulo }}
                <button @click="alternarStatus(livro)">Marcar como {{
                    livro.assistido ? 'Não Assistido' : 'Assistido' }}</button>
                <button @click="excluirLivro(livro)">Excluir</button>
            </li>
        </ul>
    </div>
</template>
    
<script>
export default {
    data() {
        return {
            novoLivro: "",
            livros: [],
        };
    },
    methods: {
        adicionarLivro() {
            if (this.novoLivro.trim() !== "") {
                this.livros.push({ titulo: this.novoLivro, assistido: false });
                this.novoLivro = "";
            }
        },
        alternarStatus(livro) {
            livro.assistido = !livro.assistido;
        },
        excluirLivro(livro) {
            let numero = this.livros.indexOf(livro);  // Encontra o índice do filme na array 'livros'.
            if (numero !== -1) {  // Verifica se o filme foi encontrado na array.
                this.livros.splice(numero, 1);  // Remove o filme da array 'livros' utilizando splice.
            }
        }
    },
};
</script>


    
<style scoped>
.catalogo-musicas {
    margin: 20px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin: 10px 0;
}
</style>