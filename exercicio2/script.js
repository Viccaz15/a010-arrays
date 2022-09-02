
// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
const numeros = [23, 08, 12]
console.log(numeros.length)
const strings = ["ano","beetle","dezembro"]
console.log(strings.length)
const variada = [23, "beetle", true]
console.log(variada.length)

// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log([23])
console.log(["beetle"])
console.log([true])

// Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.

console.log(numeros.includes(23))
console.log(strings.includes("zero"))

