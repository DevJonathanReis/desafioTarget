# Script construído para a resolução da 3ª questão do desafio Target
import json

with open('dados.json', 'r') as dados:
    faturamento = json.load(dados)

menorFaturamentoDia = min(dia['valor'] for dia in faturamento)

maiorFauramentoDia = max(dia['valor'] for dia in faturamento)

faturamentosValidos = [dia['valor']
                       for dia in faturamento if dia['valor'] > 0]
mediaMensal = sum(faturamentosValidos) / len(faturamentosValidos)

diasAcimaMedia = len([dia['valor']
                      for dia in faturamento if dia['valor'] > mediaMensal])

print(f"Menor valor de faturamento: {menorFaturamentoDia:.2f}")
print(f"Maior valor de faturamento: {maiorFauramentoDia:.2f}")
print(f"Dias com faturamento acima da média mensal: {diasAcimaMedia}")
