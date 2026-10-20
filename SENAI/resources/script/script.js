// let nomes = ["Paula Ribeiro","Ana Julia","Israel de Oliveira"];

// Enquanto é um lado de repetição que sempre irá "rodar" enquanto a condição passada for verdadeira.
// let contador = 0
// while (contador < 10) {
// alert(contador);  
// contador = contador + 1  
// }

// let contador = 0
// while (contador <= 20) {
// console.log(contador);    
// contador = contador + 2
// }

// let nomes = ["Paula Ribero", "Ana Julia","Israel de Oliveira"];
// let indice = 0;
// let encerrar = 0;
// while (encerrar < nomes.length) {
//     console.log(nomes[indice]);
//     nomes.splice(indice, 1);
//     console.log(nomes)
    
// }

// let nome = "admin"
// let login = prompt("Digite seu login")
// while (login != nome) {
//     alert("senha incorreta, tente novamente")
    
//     login = prompt("Digite seu login")
// }
// alert("Bem Vindo, ao sistema")
// console.log(nome)

// let nome = ["Paulo Ribero","Ana Julia","Israel de Oliveira","Bruno Fernandes","Zacarias"]
// // ordena os itens do array em ordem alfabetica
// nomes.sort();
// //Cria a listagem de itens
// nomes.a.forEach(nome => {
//     console.log(nome);
// });
// let indice = nomes.indexOf("Israel de Oliveira")
// nomes.splice(indice,1);

let escolha = prompt("O que você deseja fazer?\n1 - Apagar uma receita\n2 - Visualizar as receitas");

switch (escolha) {

    case "1":
        let nomeReceita = prompt("Informe o nome exato da receita que deseja excluir:");
        let indice = receitas.indexOf(nomeReceita);

        if (indice >= 0) {
            receitas.splice(indice, 1);
            alert("A receita foi excluída!");
        } else {
            alert("Essa receita não foi encontrada!");
        }
        break;

    case "2":
        alert("Certo! A lista será exibida no console.");
        break;

    default:
        alert("Escolha uma opção válida!");
        break;
}

console.log("=== LISTA DE RECEITAS ===");

receitas.forEach(function(item) {
    console.log(item);
});