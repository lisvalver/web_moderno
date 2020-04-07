function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Executando!')
    .then(frase => frase.concat(' Ok!'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))