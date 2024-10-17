let totalCarrinho = 0;
limpar();

// adicionar produto no carrinho
function adicionar(){
    // recuperar valores, nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valor = parseFloat(produto.split('$')[1]);
    let quantidade = parseInt(document.getElementById('quantidade').value);

    // calcular o preço. subtotal
    let preco = quantidade * valor;
    // adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valor}</span>
        </section>`; 
    //atualizar o valor total
    totalCarrinho += preco;
    let total = document.getElementById('valor-total');
    total.innerHTML = ` <p class="carrinho__total">
        Total: <span class="texto-azul" id="valor-total">R$${totalCarrinho.toFixed(2)}</span>
      </p>`;
    parseInt(document.getElementById('quantidade').value = 0);
}

function limpar() {
    totalCarrinho = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}