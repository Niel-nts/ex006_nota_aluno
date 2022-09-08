/*O segundo código é um programa que o aluno deve escrever duas notas 
e o retorno informa a nota mínima que ele deve tirar na próxima prova 
para poder passar com nota sete.*/

var n1, n2, n3
n1 = Number.parseInt(prompt("Qual é a sua primeira nota? "))
n2 = Number.parseInt(prompt("Qual é a sua segunda nota? "))
if (n1+n2<11){
    alert(`Você já está reprovado!`)    
} else {
    n3 = 21-(n1+n2)
    alert(`Você precisa tirar ${n3} na próxima prova para ser aprovado!`)
}

