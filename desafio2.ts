//Script construído para a resolução da 2ª questão do desafio Target
function fibonacci(numero: number): void {
    let a: number = 0;
    let b: number = 1;
    let c: number;
    let encontrado: boolean = false;

    while (a <= numero) {
        if (a === numero) {
            encontrado = true;
            break;
        }

        c = a + b;
        a = b;
        b = c;
    }

    encontrado ?
        console.log(numero + " pertence à sequência de Fibonacci.") :
        console.log(numero + " não pertence à sequência de Fibonacci.");
}

const numeroInformado: number = 13; //numero definido
fibonacci(numeroInformado);