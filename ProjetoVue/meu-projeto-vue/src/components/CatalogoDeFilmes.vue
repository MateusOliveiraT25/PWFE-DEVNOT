<template>
    <div class="catalogo-filmes">
        <h2>Catálogo de Filmes</h2>
        <input v-model="novoFilme" @keyup.enter="adicionarFilme" placeholder="Digite um novo filme" />
        <ul>
            <button @click="adicionarFilme(filme)">Adicionar Filme</button>
            <li v-for="(filme, index) in filmes" :key="index">
                {{ filme.titulo }}
                <button @click="alternarStatus(filme)">Marcar como {{
                    filme.assistido ? 'Não Assistido' : 'Assistido' }}</button>
                <button @click="excluirFilme(filme)">Excluir</button>
            </li>
        </ul>
    </div>
</template>
    
<script>
export default {
    data() {
        return {
            novoFilme: "",
            filmes: [],
        };
    },
    methods: {
        adicionarFilme() {
            if (this.novoFilme.trim() !== "") {
                this.filmes.push({ titulo: this.novoFilme, assistido: false });
                this.novoFilme = "";
            }
        },
        alternarStatus(filme) {
            filme.assistido = !filme.assistido;
        },
        excluirFilme(filme) {
            let numero = this.filmes.indexOf(filme);  // Encontra o índice do filme na array 'filmes'.
            if (numero !== -1) {  // Verifica se o filme foi encontrado na array.
                this.filmes.splice(numero, 1);  // Remove o filme da array 'filmes' utilizando splice.
            }
        }
    },
};
</script>


    
<style scoped>
.catalogo-filmes {
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