let nomePersonagem = "";
let exp = 0;
let repetir = "";
do {
  let nivel = "";
  nomePersonagem = prompt("Informe o nome do personagem: \n");
  exp = parseInt(prompt("Digite o XP de " + nomePersonagem + " :\n "));
  if (exp <= 1000) {
    nivel = "Ferro";
    alert("O herói de nome " + nomePersonagem + " está no nível de " + nivel);
  } else if (exp >= 1001 && exp <= 2000) {
    nivel = "Bronze";
    alert("O herói de nome " + nomePersonagem + " está no nível de " + nivel);
  } else if (exp >= 2001 && exp <= 5000) {
    nivel = "Prata";
    alert("O herói de nome " + nomePersonagem + " está no nível de " + nivel);
  } else if (exp >= 6001 && exp <= 7000) {
    nivel = "Ouro";
    alert("O herói de nome " + nomePersonagem + " está no nível de " + nivel);
  } else if (exp >= 7001 && exp <= 8000) {
    nivel = "Platina";
    alert("O herói de nome " + nomePersonagem + " está no nível de " + nivel);
  } else if (exp >= 8001 && exp <= 9000) {
    nivel = "Ascendente";
    alert("O herói de nome " + nomePersonagem + " está no nível de " + nivel);
  } else if (exp >= 9001 && exp <= 10000) {
    nivel = "Imortal";
    alert("O herói de nome " + nomePersonagem + " está no nível de " + nivel);
  } else if (exp >= 10001) {
    nivel = "Radiante";
    alert("O herói de nome " + nomePersonagem + " está no nível de " + nivel);
  } else {
    alert("\nOpção inválida!");
  }
  repetir = prompt("Deseja ver um novo personagem ?(sim/nao)");
} while (repetir !== "nao");
alert("Programa encerrado.");
