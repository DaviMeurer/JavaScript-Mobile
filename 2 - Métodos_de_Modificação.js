let numeros = [1, 2, 3]
let letras = ["faróis", "abecedário", "China", "Porcaria"]

numeros.forEach((Element) => console.log(Element)) //printará cada elemento exclusivamente

let map = numeros.map((x) => x * 2) //pegará cada elemento e fará uma operação, e então, vai retornar os novos valores à variável
console.log(map)

let filter = letras.filter((word) => word.length >= 8) //filtrará os elementos referenciando por um padrão
console.log(filter) 

let