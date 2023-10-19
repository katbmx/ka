function calcular() {
    const h0 = Number(document.querySelector("#inputposicao").value); // posicao
    const v0 = Number(document.querySelector("#inputvelocidade").value); // velcidade
    const t = Number(document.querySelector("#inputtempo").value); // tempo
    const g = 10
    const h = h0 + v0 * t + (g * t ** 2)/ 2 //fórmula

    document.querySelector("#resultado").textContent = "Altura:" + h.toFixed(2) + "m/s"; // oque faz o resultado aparecer
   
}

document.addEventListener("DOMContentLoaded", () => {
    const calcularButton = document.querySelector("#calcular");
    calcularButton.addEventListener("click", calcular); // oque faz o botão calcular a fórmula
});