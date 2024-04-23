function Verificar(){ 
    alert('Adicione valores antes de finalizar')
    var formnum = document.querySelector('input#numerodigitado')
    var resultado = document.querySelector('div#resultado')
    var formnum2 = document.querySelector('input#valores')

     }

     const numeros = [];

function adicionar() {
    const numero = parseInt(document.getElementById('numerodigitado').value);
    if (numero >= 1 && numero <= 100) {
        numeros.push(numero);
    } else {
        alert('Insira um número entre 1 e 100.')
    }
}

function Verificar() {
    const maior = Math.max(...numeros);
    const menor = Math.min(...numeros);
    const soma = numeros.reduce((acc, curr) => acc + curr, 0);
    const media = soma / numeros.length;

    const resultado = `Maior número: ${maior}<br>
                       Menor número: ${menor}<br>
                       Soma dos valores: ${soma}<br>
                       Média dos valores: ${media.toFixed(2)}<br>
                       Quantidade de elementos: ${numeros.length}`;

    document.getElementById("resultado").innerHTML = resultado;
}