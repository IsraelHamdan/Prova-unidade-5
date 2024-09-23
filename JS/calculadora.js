const altura = document.getElementById("altura");
const massa = document.getElementById("massa");
const resultado = document.getElementById("result");
const calcular = document.getElementById("calcula");

calcular.addEventListener("click", () => {
  const massaUser = parseFloat(massa.value);
  const alturaUser = parseFloat(altura.value) / 100;
  const imc = parseInt(massaUser / (alturaUser * alturaUser));
  console.log("🚀 ~ calcular.addEventListener ~ imc:", imc);

  resultado.innerHTML = imc.toFixed(2);
});
