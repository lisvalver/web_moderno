const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 29.90}',
    '{"nome": "lápis", "preco": 12.35}',
    '{"nome": "caneta", "preco": 7.50}'
]

// Retornando um array apenas com preços

const convertObjeto = json => JSON.parse(json)
const separarPreco = produto => produto.preco

const resultado = carrinho.map(convertObjeto).map(separarPreco)
console.log(resultado)