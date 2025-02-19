// ARRAYS
let carros1 = ["Fiat", "Volvo", "BMW"]

let carros2 = new Array("Fiat", "Volvo", "BMW")

let carros3 = Array(3)
carros3[0] = "Fiat"
carros3[1] = "Volvo"
carros3[2] = "BMW"

let carros4 = ["fusca",]

let nome1 = carros1[0];
let nome2 = carros2.indexOf("Volvo");
let nome3 = carros3;

// console.log(nome1)
// console.log(nome2)
// console.log(nome3)

// ARRAYS

// MÉTODOS DE MODIFICAÇÃO
let numeros = [1, 2, 3]
let letras = ["faróis", "abecedário", "China", "Porcaria"]

numeros.forEach((Element) => console.log(Element)) //printará cada elemento exclusivamente

let map = numeros.map((x) => x * 2) //pegará cada elemento e fará uma operação, e então, vai retornar os novos valores à variável
console.log(map)

let filter = letras.filter((word) => word.length >= 8)
console.log(filter) 

let

// MÉTODOS DE MODIFICAÇÃO