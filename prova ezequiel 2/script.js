function jogoadivinhacao() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1; 
    let tentativa = 0;
    let chute = null;

    alert("Bem vindo ao jogo de adivinhação!\nTente adivinhar o número entre 1 e 100.");
    while (chute !== numeroSecreto) {
        chute = Number(prompt("Digite seu palpite:"));
        tentativa++;
        if (chute > numeroSecreto) {
            alert("O número secreto é menor!");
        } else if (chute < numeroSecreto) {
            alert("O número secreto é maior!");
        } else if (chute === numeroSecreto) {
            alert("Parabéns! Você acertou o número secreto.");
        }
    }
}