let itemcounter = 0;

let input = document.getElementById("inputTarefa"); //Separa a variavel para o valor do input
let btnAdd = document.getElementById("adicionar"); //Registra o botão de adicionar.
let main = document.getElementById("areaLista") //Separa a variavel da area onde sera colocada no html

function addTarefa() {
    //Pega o Valor Digitado no Input
    let valorInput = input.value;

    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){

        ++itemcounter;

        let novoItem = `
        <div  class="item" id="${itemcounter}">
            <div class="item-icone">
                <i onclick="finished(${itemcounter})" id="icone_${itemcounter}" class="mdi mdi-circle-outline"></i>
            </div>
            <div class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button onclick="deletar(${itemcounter})" class="delete"><i class="mdi mdi-delete"></i>Deletar</button>
            </div>
        </div>
        `;
        // Adicionar Item na main
        main.innerHTML += novoItem;

        //Zerar o Campo de input
        input.value = "";
        input.focus();

    }
}
// Função de deletar a tarefa
function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function finished(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if(classe=="item"){
        item.classList.add('clicado');

        var icone = document.getElementById('icone_'+ id)
        icone.classList.remove('mdi-circle-outline')
        icone.classList.add('mdi-check-circle')

        item.parentNode.appendChild(item);
    }else{
        var icone = document.getElementById('icone_'+ id)
        item.classList.remove('clicado');
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }

}

//Evento para que o botão enter seja reconhecido na hora de adicionar uma tarefa
input.addEventListener("keyup", function(event){
    
    if(event.key === "Enter"){
        event.preventDefault();
        btnAdd.click();
        }
    }
)




//Data Atualizada Diariamente
const d = new Date();
document.getElementById("dia").innerHTML = d.getDate();


const months = [" Janeiro", " Fevereiro", " Março", " Abril", " Maio", " Junho", " Julho", " Agosto", " Setembro", " Outubro", " Novembro", " Dezembro"];

const m = new Date();
let month = months[m.getMonth()];

document.getElementById("mes").innerHTML = month;