// não aceita repetição / não indexada
const times = new Set()
times.add('Ponte Preta')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Santos')
times.add('Santos')

console.log(times)
console.log(times.size)
console.log(times.has('santos'))
console.log(times.has('Santos'))
times.delete('Corinthians')
console.log(times.has('Corinthians'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)