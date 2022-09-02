const numerosOriginal = [23, 08, 12]
const stringsOriginal = ["ano","beetle","dezembro"]
const variadaOriginal = [23, "beetle", true]

// - Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
console.log(numerosOriginal)
const numerosCopia = numerosOriginal
numerosCopia.push(2)
console.log(numerosCopia)

// Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;

console.log(stringsOriginal)
const stringCopia = stringsOriginal
stringCopia.pop("dezembro")
console.log(stringCopia)

//- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
console.log(variadaOriginal)
const variadaCopia = variadaOriginal
variadaCopia.pop("beetle")
console.log(variadaCopia)