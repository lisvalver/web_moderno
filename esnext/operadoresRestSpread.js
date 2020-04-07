// operador ... rest(juntar) / spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionarios = {nome: 'Bryan', salario: 1286.55}
const clone = {ativo: true, ...funcionarios}
console.log(clone)

// usar spread com array
const grupoA = ['Dom', 'Bryan', 'Han']
const grupoFinal = ['Robs', ...grupoA, 'Shaw']
console.log(grupoFinal)