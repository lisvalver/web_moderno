// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)
// console.log(b)   // Não tem scopo

// Template String
const produto = 'Ipad'
console.log(`${produto} é caro!`)

const produto2 = 'Ipad'
console.log(`${produto2} 
é 
caro!`)

// Destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome} = {nome: 'João', idade: 23}
console.log(i, nome)

