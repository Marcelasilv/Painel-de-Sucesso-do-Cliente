const atendimentos = [9, 10, 8, 6, 10, 7, 5];

const positivos = atendimentos.filter(n => n >= 9).length;
const negativos = atendimentos.filter(n => n <= 6).length;
const total = atendimentos.length;

const nps = ((positivos - negativos) / total) * 100;

document.getElementById("total").innerText = total;
document.getElementById("positivos").innerText = positivos;
document.getElementById("negativos").innerText = negativos;
document.getElementById("nps").innerText = nps.toFixed(0);
