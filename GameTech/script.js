let carrinho = [];
let totalCarrinho = 0;

function adicionarAoCarrinho(nome, preco) {
   carrinho.push({ nome: nome, preco: preco });
   totalCarrinho += preco;
   atualizarCarrinho();
}

function atualizarCarrinho() {
   const itensCarrinho = document.getElementById("itens-carrinho");
   const totalCarrinhoElement = document.getElementById("total-carrinho");
   
   itensCarrinho.innerHTML = "";
   carrinho.forEach(item => {
      const li = document.createElement("li");
      li.innerText = `${item.nome} - R$ ${item.preco}`;
      itensCarrinho.appendChild(li);
   });
   
   totalCarrinhoElement.innerText = totalCarrinho.toFixed(2);
}
