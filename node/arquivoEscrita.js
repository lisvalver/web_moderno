const fs = require('fs')

const produto = {
    nome: 'celular',
    preco: 1299.99,
    desconto: .15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})