//Script construído para a resolução da 4ª questão do desafio Target
interface FaturamentoPorEstado {
    [estado: string]: number;
}

const faturamento: FaturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const totalFaturamento = Object.values(faturamento).reduce((acc, curr) => acc + curr);

const percentuaisPorEstado: FaturamentoPorEstado = {};

for (const estado in faturamento) {
    percentuaisPorEstado[estado] = Number((faturamento[estado] / totalFaturamento * 100).toFixed(2));
}

console.log(percentuaisPorEstado);