let input = document.getElementById("inputTarefa"); //Separa a variavel para o valor do input
let btnAdd = document.getElementById("adicionar"); //Registra o botão de adicionar.
let main = document.querySelector("#areaLista"); //Separa a variavel da area onde sera colocada no html

let mainInput = document.querySelector("#main-input");

// Variaveis usadas na parte de Editar
let editBack = document.querySelector("#cancel-edit-back");
let editForm = document.querySelector('#editform');
let editTitle = document.querySelector("#edit-title")
let toolBar = document.querySelector("#toolbar")

let oldInputValue;

let valorInput;



let itemcounter = 0; //Contador que vai servir para armazenar o id da classe "item".



//Função de Adicionar Tarefas
function addTarefa() {
    
    //Pega o Valor Digitado no Input
    valorInput = input.value;

    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){

        ++itemcounter;
        let novoItem = `
        <div class="item" id="${itemcounter}">
            <div class="item-icone">
                <i onclick="finished(${itemcounter})" id="icone_${itemcounter}" class="mdi mdi-circle-outline"></i>
            </div>
            <div class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button onclick="editar(${itemcounter})" class="edit">
                <span class="mdi mdi-pencil-outline"></span>
                </button>
                <button onclick="deletar(${itemcounter})" class="delete">
                <i class="mdi mdi-delete"></i>
                </button>
            </div>
        </div>
        `;


        // Adicionar Item na main
        main.innerHTML += novoItem;

        //Zerar o Campo de input
        input.value = "";
        input.focus();

    }
};

// Função de deletar a tarefa
function deletar(id){
    var item = document.getElementById(id);
    item.remove();
}
// Função para marcar como Concluido


function finished(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    var icone = document.getElementById('icone_'+ id)

    if(classe=="item"){
        item.classList.toggle('concluido');

        icone.classList.remove('mdi-circle-outline')
        icone.classList.add('mdi-check-circle')

    }else{
        item.classList.toggle('concluido');

        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }

}

//Evento do botão editar
function switchCard(){
    mainInput.classList.toggle('hidden');
    editForm.classList.toggle('hidden');
    editBack.classList.toggle('hidden');
    toolBar.classList.toggle('hidden');
    editTitle.classList.toggle('hidden');
    main.classList.toggle('hidden');
}
// Botão de Editar a tarefa
function editar(id){

    var item = document.getElementById(id); 

    let item_input = item.querySelector(".item-nome").textContent.trim();

    console.log(item_input);

    console.log(item);

    

    
    let edit = document.querySelector(".edit")

    if(edit.classList.contains("edit") || (item.classList.contains("mdi-pencil-outline"))){
        switchCard();    

        
    }

}

//Evento no botão da seta para "voltar"

editBack.addEventListener("click", (e) => {
    e.preventDefault();
    switchCard();

})


//Evento para que o botão ENTER seja reconhecido na hora de adicionar uma tarefa
input.addEventListener("keyup", function(event){
    
    if(event.key === "Enter"){
        event.preventDefault();
        btnAdd.click();
        }
    }
)





//Data Atualizada Diariamente
const d = new Date();
document.getElementById("dia").innerHTML = d.getDate()+" de";


const months = [" Janeiro", " Fevereiro", " Março", " Abril", " Maio", " Junho", " Julho", " Agosto", " Setembro", " Outubro", " Novembro", " Dezembro"];

const m = new Date();
let month = months[m.getMonth()];

document.getElementById("mes").innerHTML = month;