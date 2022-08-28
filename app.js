// DECLARAÇÃO DE VARIÁVEIS

// Questão 01
const l1 = document.getElementById('l1');
const l2 = document.getElementById('l2');
const l3 = document.getElementById('l3');
const btn1 = document.getElementById('btn-1');

// Questão 02
const ax2 = document.getElementById('ax2');
const bx = document.getElementById('bx');
const c = document.getElementById('c');
const btn2 = document.getElementById('btn-2');

// Questão 03 
const nota = document.getElementById('nota');
const btn3 = document.getElementById('btn-3');

// Questão 04 
const num = document.getElementById('num');
const btn4 = document.getElementById('btn-4');

// FUNÇÕES

// Questão 01
function checkTriangle(lado1, lado2, lado3) {

    if (lado1 <= soma(lado2, lado3) && lado2 <= soma(lado1, lado3) && lado3 <= soma(lado1, lado2)) {
        return true;
    } else {
        return false;
    }
}

function soma(l1, l2) { return l1 + l2; }

function typeTriangle(lado1, lado2, lado3) {

    if (lado1 != lado2 && lado2 != lado3 && lado3 != lado1) {
        alert("Todos os lados são diferentes, logo é um triângulo escaleno!");
    } else if (lado1 == lado2 && lado2 == lado3) {
        alert("Todoas os lados são iguais, logo é um triângulo equilátero!");
    } else {
        alert("Dois lados são iguais, logo é um triângulo isóceles!");
    }

}

// Questão 02
function calcBhaskara(ax2, bx, delta) {
    var x1 = ((bx * (-1)) - Math.sqrt(delta)) / (2 * ax2);
    var x2 = ((bx * (-1)) + Math.sqrt(delta)) / (2 * ax2);
    var v = [x1, x2];
    alert(v);

}

function calcDelta(ax2, bx, c) {
    var delta = (bx * bx) - (4 * ax2 * c);
    console.log(delta);
    delta < 0 ? alert("Delta é negativo!") : calcBhaskara(ax2, bx, Number(delta));
}

// Questão 03
function managementGrade(nota) {
    if (nota >= 0 && nota <= 100) {
        if (nota >= 38) {
            nota % 5 > 2 ? nota = (Math.floor(nota / 5) + 1) * 5 : nota;
        }
        nota >= 40 ? alert("Aluno aprovado!") : alert("Aluno reprovado!");
    } else {
        alert("Digite uma nota de 0 a 100.");
    }
}

// Questão 04 
function luidyMoura(num) {
    var array = [];
    for (i = 1; i <= num; i++) {
        if (i % 5 == 0 && i % 9 == 0) {
            array.push("LuidyMoura");
        } else if (i % 5 == 0) {
            array.push("Luidy");
        } else if (i % 9 == 0) {
            array.push("Moura");
        } else {
            array.push(i);
        }
    }
    alert(array);
}

// EVENTOS

// Questão 01
btn1.onclick = () => {
    checkTriangle(Number(l1.value), Number(l2.value), Number(l3.value)) ? typeTriangle(Number(l1.value), Number(l2.value), Number(l3.value)) : alert("Os valores do lados não atendem a condição de existência de um triângulo");
    l1.value = "";
    l2.value = "";
    l3.value = "";
};

// Questão 02
btn2.onclick = () => {
    calcDelta(Number(ax2.value), Number(bx.value), Number(c.value));
    ax2.value = "";
    bx.value = "";
    c.value = "";
};

// Questão 03
btn3.onclick = () => {
    managementGrade(Number(nota.value));
    nota.value = "";
};

// Questão 04
btn4.onclick = () => {
    luidyMoura(Number(num.value));
    num.value = "";
};