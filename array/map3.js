Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 29.90}',
    '{"nome": "lápis", "preco": 12.35}',
    '{"nome": "caneta", "preco": 7.50}'
]

const convertObjeto = json => JSON.parse(json)
const separarPreco = produto => produto.preco

const resultado = carrinho.map2(convertObjeto).map2(separarPreco)
console.log(resultado)