//Script construído para a resolução da 5ª questão do desafio Target
function inverteString(str: string): string {
    let stringReversa = "";
    for (let i = str.length - 1; i >= 0; i--) {
        stringReversa += str[i];
    }
    return stringReversa;
}

const stringOriginal = "Desafio Target"; //string definida
const stringInvertida = inverteString(stringOriginal);
console.log(stringInvertida);